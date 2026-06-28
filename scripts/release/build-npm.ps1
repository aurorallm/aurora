param(
  [string]$Version = "",
  [switch]$SkipBuild,
  [switch]$Pack
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Push-Location $root
try {
  if (-not $SkipBuild) {
    Write-Host "Building dashboard UI..."
    & pnpm --dir dashboard-ui run build
    if (-not $?) { throw "dashboard-ui build failed" }

    Write-Host "Building Go binary..."
    $pkgJson = Get-Content -Raw (Join-Path $root "package.json") | ConvertFrom-Json
    $versionStr = if ($Version) { $Version } else { $pkgJson.version }
    $commit = (git rev-parse --short HEAD 2>$null)
    if (-not $commit) { $commit = "local" }
    $date = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
    $ldflags = "-X aurora/internal/version.Version=$versionStr -X aurora/internal/version.Commit=$commit -X aurora/internal/version.Date=$date"

    go build -ldflags "$ldflags" -o bin/aurora.exe ./apps/aurora
    if (-not $?) { throw "Go build failed" }
  }

  $npmDir = Join-Path $root "npm"
  if (Test-Path $npmDir) { Remove-Item -Recurse -Force $npmDir }
  New-Item -ItemType Directory -Path $npmDir -Force | Out-Null
  New-Item -ItemType Directory -Path (Join-Path $npmDir "bin") | Out-Null
  New-Item -ItemType Directory -Path (Join-Path $npmDir "scripts") | Out-Null

  Copy-Item (Join-Path $root "bin\aurora.exe") (Join-Path $npmDir "bin\aurora.exe") -Force
  Copy-Item (Join-Path $root "bin\aurora.js") (Join-Path $npmDir "bin\aurora.js") -Force
  Copy-Item (Join-Path $root "scripts\npm-postinstall.js") (Join-Path $npmDir "scripts\npm-postinstall.js") -Force
  Copy-Item (Join-Path $root "configs\editions\oss.example.yaml") (Join-Path $npmDir "config.yaml") -Force
  Copy-Item (Join-Path $root ".env.template") (Join-Path $npmDir ".env.example") -Force
  Copy-Item (Join-Path $root "README.md") (Join-Path $npmDir "README.md") -Force
  Copy-Item (Join-Path $root "LICENSE") (Join-Path $npmDir "LICENSE") -Force

  $pkgJson = Get-Content -Raw (Join-Path $root "package.json") | ConvertFrom-Json
  $npmPkg = @{
    name = "iaurora"
    version = if ($Version) { $Version } else { $pkgJson.version }
    description = "Aurora AI Gateway - one API for every LLM provider. Self-hosted, open-source."
    type = "module"
    bin = @{
      "aurora" = "bin/aurora.js"
    }
    scripts = @{
      postinstall = "node ./scripts/npm-postinstall.js"
    }
    engines = @{ node = ">=18" }
    keywords = @("ai", "llm", "gateway", "openai", "anthropic", "gemini", "proxy", "api-gateway")
    license = "Apache-2.0"
    repository = @{
      type = "git"
      url = "git+https://github.com/aurorallm/aurora.git"
    }
    homepage = "https://github.com/aurorallm/aurora#readme"
    bugs = @{ url = "https://github.com/aurorallm/aurora/issues" }
    author = "Aurora Gateway"
    files = @("bin/", "scripts/", "config.yaml", ".env.example", "README.md", "LICENSE")
  }
  $npmPkg | ConvertTo-Json -Depth 10 | Set-Content (Join-Path $npmDir "package.json")

  if ($Pack) {
    Push-Location $npmDir
    try {
      npm pack
      $tgz = Get-ChildItem -Filter "*.tgz" | Select-Object -First 1
      if ($tgz) {
        Copy-Item $tgz.FullName (Join-Path $root "release") -Force
        Write-Host "Package created: release/$($tgz.Name)"
      }
    } finally {
      Pop-Location
    }
  }

  Write-Host "npm package prepared at: $npmDir"
  Write-Host "Run 'cd npm && npm publish' to publish"
} finally {
  Pop-Location
}
