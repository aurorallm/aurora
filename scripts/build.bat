@echo off
setlocal enabledelayedexpansion

if "%npm_package_version%"=="" (
    for /f "usebackq tokens=2 delims=:," %%a in (`powershell -c "(Get-Content package.json | ConvertFrom-Json).version"`) do set ver=%%~a
    set ver=!ver: =!
) else (
    set ver=%npm_package_version%
)

echo Building Aurora Gateway v!ver!...
go build -ldflags "-X aurora/internal/version.Version=!ver!" -o bin\aurora.exe .\apps\aurora
if %errorlevel% neq 0 (
    echo Build FAILED with exit code %errorlevel%
    exit /b %errorlevel%
)
echo Build complete: bin\aurora.exe
