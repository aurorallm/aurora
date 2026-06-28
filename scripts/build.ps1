$ver = $env:npm_package_version
if (-not $ver) {
    $ver = (Get-Content -Raw package.json | ConvertFrom-Json).version
}

Write-Host "Building Aurora Gateway v$ver..." -ForegroundColor Cyan
$result = go build -ldflags "-X aurora/internal/version.Version=$ver" -o bin/aurora.exe ./apps/aurora
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build FAILED with exit code $LASTEXITCODE" -ForegroundColor Red
    exit $LASTEXITCODE
}
Write-Host "Build complete: bin/aurora.exe" -ForegroundColor Green
