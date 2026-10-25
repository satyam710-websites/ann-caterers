# Regenerates the downloadable platter PDFs in /menus from platter.html.
# Run after editing js/platters.js:   powershell -ExecutionPolicy Bypass -File tools\make-menu-pdfs.ps1
# Uses Microsoft Edge (or Chrome) in headless mode — both are free and already on most Windows PCs.

$root = Split-Path -Parent $PSScriptRoot
$out  = Join-Path $root "menus"
New-Item -ItemType Directory -Force $out | Out-Null

$browser = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw "Microsoft Edge or Google Chrome is required." }

# Separate profile so it never touches your normal browser session
$profileDir = Join-Path $env:TEMP "ann-menu-pdf-profile"
$pageUrl = "file:///" + ($root -replace '\\', '/') + "/platter.html"

foreach ($id in "silver", "golden", "platinum") {
  $pdf = Join-Path $out "ann-$id-platter.pdf"
  & $browser --headless --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw `
    --virtual-time-budget=10000 "--user-data-dir=$profileDir" "--print-to-pdf=$pdf" "$pageUrl`?p=$id" 2>$null | Out-Null
  Write-Host "Created $pdf"
}
