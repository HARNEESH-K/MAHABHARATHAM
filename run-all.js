/**
 * Root Orchestrator: Runs both Backend Server and Frontend Vite Dev Server concurrently
 */
const { spawn } = require('child_process');
const path = require('path');

const isWindows = process.platform === 'win32';
const npmCmd = isWindows ? 'npm.cmd' : 'npm';

console.log('========================================================');
console.log('🏹 LAUNCHING MAHABHARATA – THE 18 PARVAS QUEST');
console.log('⚡ Starting Backend (Port 5000) & Frontend (Port 5173)...');
console.log('========================================================');

const backend = spawn(npmCmd, ['run', 'dev'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit',
  shell: true
});

const frontend = spawn(npmCmd, ['run', 'dev'], {
  cwd: path.join(__dirname, 'frontend'),
  stdio: 'inherit',
  shell: true
});

const cleanup = () => {
  console.log('\n🛑 Shutting down Mahabharata servers...');
  backend.kill();
  frontend.kill();
  process.exit(0);
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
