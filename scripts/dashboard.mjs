import { execSync } from 'node:child_process';

const dev = process.argv[2] === 'dev';
const command = dev ? 'dev' : 'build --outDir ../../dist --emptyOutDir';

execSync(`pnpm --dir dashboard/frontend ${command}`, {
  stdio: 'inherit',
  env: { ...process.env, VITE_API_BASE_URL: 'http://homeassistant.dom:8080' },
});
