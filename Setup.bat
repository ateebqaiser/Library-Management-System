@echo off
setlocal enabledelayedexpansion

echo =============================
echo Installing Frontend Packages...
echo =============================
cd frontend
call npm install
cd ..

echo =============================
echo Installing Backend Packages...
echo =============================
cd backend
call npm install
cd ..

echo =============================
echo Setup Completed Successfully!
pause
