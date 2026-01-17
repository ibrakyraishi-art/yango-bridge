@echo off
chcp 65001 >nul
echo ========================================
echo   Deploying to Vercel via GitHub
echo ========================================
echo.

cd /d C:\Users\User\yango-bridge-project

echo [1/4] Checking current status...
git status

echo.
echo [2/4] Adding files...
git add .

echo.
echo [3/4] Committing changes...
git commit -m "Add: Greeting message - Privet Ibra"

echo.
echo [4/4] Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo   DONE! Vercel is deploying now...
echo   Wait 30-60 seconds then check:
echo   https://yango-bridge.vercel.app
echo ========================================
echo.
echo Press any key to exit...
pause >nul
