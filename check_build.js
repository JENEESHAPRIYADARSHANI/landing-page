import { exec } from 'child_process';
exec('npx vite build', (err, stdout, stderr) => {
  if (err) {
    console.error("VITE BUILD ERROR STACK:");
    console.error(err.message);
  }
  if (stderr) {
    console.error("VITE STDERR:");
    console.error(stderr);
  }
});
