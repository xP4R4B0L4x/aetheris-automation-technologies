@echo off
echo.
echo  ╔═══════════════════════════════════════════════╗
echo  ║   Ætheris Automation Technologies             ║
echo  ║   Local Dev Server (Vercel)                   ║
echo  ║   http://localhost:3000                        ║
echo  ╚═══════════════════════════════════════════════╝
echo.

cd /d "%~dp0"

:: Check for Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo  [ERROR] Node.js not found. Please install it from https://nodejs.org
    pause
    exit /b 1
)

:: Check for npm
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo  [ERROR] npm not found. Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

:: Install dependencies if node_modules missing
if not exist "node_modules" (
    echo  Installing dependencies...
    npm install
    echo.
)

:: Install Vercel CLI globally if not present
where vercel >nul 2>&1
if %errorlevel% neq 0 (
    echo  Installing Vercel CLI...
    npm install -g vercel
    echo.
)

:: Create .env.local if it doesn't exist
if not exist ".env.local" (
    echo  Creating .env.local for your API key...
    echo RESEND_API_KEY=your_resend_api_key_here > .env.local
    echo.
    echo  *** IMPORTANT: Edit .env.local and paste your Resend API key! ***
    echo.
)

echo  Starting Vercel dev server...
echo  Open http://localhost:3000 in your browser.
echo  Press Ctrl+C to stop.
echo.
start "" "http://localhost:3000"
vercel dev --listen 3000
pause
