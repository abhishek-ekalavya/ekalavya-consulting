import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/',
    build: {
      outDir: 'dist',
    },
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'decap-cms-admin-middleware',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url ? req.url.split('?')[0] : '';
            if (url === '/admin' || url === '/admin/') {
              const adminHtmlPath = path.resolve(__dirname, 'public/admin/index.html');
              if (fs.existsSync(adminHtmlPath)) {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(fs.readFileSync(adminHtmlPath));
                return;
              }
            } else if (url === '/admin/config.yml') {
              const configPath = path.resolve(__dirname, 'public/admin/config.yml');
              if (fs.existsSync(configPath)) {
                res.setHeader('Content-Type', 'text/yaml; charset=utf-8');
                res.end(fs.readFileSync(configPath));
                return;
              }
            } else if (url === '/api/upload-founder-photo' && req.method === 'POST') {
              const chunks: Buffer[] = [];
              req.on('data', (chunk: any) => chunks.push(Buffer.from(chunk)));
              req.on('end', () => {
                const buffer = Buffer.concat(chunks);
                const file1 = path.resolve(__dirname, 'public/IMG_20260928_191429.jpg');
                const file2 = path.resolve(__dirname, 'public/IMG-20260928-WA3261.jpg');
                fs.writeFileSync(file1, buffer);
                fs.writeFileSync(file2, buffer);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, size: buffer.length }));
              });
              return;
            }
            next();
          });
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
