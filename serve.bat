@echo off
echo.
echo  ╔═══════════════════════════════════════╗
echo  ║   Ætheris Website Local Server        ║
echo  ║   http://localhost:8080               ║
echo  ╚═══════════════════════════════════════╝
echo.
echo  Starting server... Press Ctrl+C to stop.
echo.
cd /d "%~dp0"
start "" "http://localhost:8080"
python -m http.server 8080
pause
