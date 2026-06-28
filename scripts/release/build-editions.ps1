param(
  [string]$OutputDir = "bin",
  [switch]$Package
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Push-Location $root
try {
  if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
  }

  pnpm --dir dashboard-ui run build

  $commit = (git rev-parse --short HEAD 2>$null)
  if (-not $commit) { $commit = "local" }
  $date = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")

  $commonLdflags = "-X aurora/internal/version.Commit=$commit -X aurora/internal/version.Date=$date"

  go build -ldflags "$commonLdflags -X aurora/internal/version.Version=oss" -o (Join-Path $OutputDir "aurora-oss.exe") ./apps/aurora

  if ($Package) {
    $releaseDir = "release"
    $ossDir = Join-Path $releaseDir "aurora-oss"
    New-Item -ItemType Directory -Force -Path $ossDir | Out-Null
    Copy-Item (Join-Path $OutputDir "aurora-oss.exe") (Join-Path $ossDir "aurora-oss.exe") -Force
    Copy-Item "configs/editions/oss.example.yaml" (Join-Path $ossDir "config.yaml") -Force
    Copy-Item "README.md" (Join-Path $ossDir "README.md") -Force
    Compress-Archive -Path (Join-Path $ossDir "*") -DestinationPath (Join-Path $releaseDir "aurora-oss-windows-amd64.zip") -Force
  }

  Write-Host "Built OSS edition:"
  Write-Host "  $OutputDir/aurora-oss.exe"
  if ($Package) {
    Write-Host "Packages:"
    Write-Host "  release/aurora-oss-windows-amd64.zip"
  }
  Write-Host "Run OSS:        `$env:AURORA_CONFIG_PATH='configs/editions/oss.example.yaml'; ./$OutputDir/aurora-oss.exe"
} finally {
  Pop-Location
}
