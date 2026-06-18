@echo off
setlocal
cd /d "%~dp0client"
set PORT=4444
npm start
