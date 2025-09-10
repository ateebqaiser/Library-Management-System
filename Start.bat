@echo off
echo =============================
echo Starting Frontend Server...
echo =============================
start cmd /k "cd frontend && npm run dev"

echo =============================
echo Starting Backend Server...
echo =============================
start cmd /k "cd backend && npm start"

echo =============================
echo Both servers are running!
pause
