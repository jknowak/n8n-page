import { execSync } from 'child_process';

console.log('Installing tailwind-merge...');
try {
  execSync('pnpm add tailwind-merge@3.3.1', { stdio: 'inherit', cwd: '/vercel/share/v0-project' });
  console.log('tailwind-merge installed successfully');
} catch (e) {
  console.error('Failed to install:', e.message);
}
