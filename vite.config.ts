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
            } else if ((url === '/api/upload-founder-photo' || url === '/api/sync-founder-base64') && req.method === 'POST') {
              const chunks: Buffer[] = [];
              req.on('data', (chunk: any) => chunks.push(Buffer.from(chunk)));
              req.on('end', () => {
                let buffer: Buffer;
                const raw = Buffer.concat(chunks);
                const str = raw.toString('utf8');
                if (str.startsWith('{') && str.includes('dataUrl')) {
                  try {
                    const parsed = JSON.parse(str);
                    const b64 = parsed.dataUrl.split(',')[1];
                    buffer = Buffer.from(b64, 'base64');
                  } catch {
                    buffer = raw;
                  }
                } else if (str.startsWith('data:image/')) {
                  const b64 = str.split(',')[1];
                  buffer = Buffer.from(b64, 'base64');
                } else {
                  buffer = raw;
                }

                const targets = [
                  'src/assets/founder.jpg',
                  'public/IMG_20260928_191429.jpg',
                  'public/IMG-20260928-WA3261.jpg',
                  'public/founder.jpg',
                  'public/profile.jpg'
                ];
                targets.forEach(t => {
                  try {
                    fs.writeFileSync(path.resolve(__dirname, t), buffer);
                  } catch (e) {
                    console.error('Error writing target', t, e);
                  }
                });

                // Also update src/assets/founder.ts with fresh base64 string
                const b64String = buffer.toString('base64');
                const tsContent = `// Bundled founder photo with base64 embedded fallback to guarantee availability on all live deployments
import founderAssetUrl from './founder.jpg';

export const FOUNDER_ASSET_URL = founderAssetUrl;
export const FOUNDER_PHOTO_DATA_URL = 'data:image/jpeg;base64,${b64String}';
export const DEFAULT_FOUNDER_PHOTO = founderAssetUrl || FOUNDER_PHOTO_DATA_URL;
`;
                fs.writeFileSync(path.resolve(__dirname, 'src/assets/founder.ts'), tsContent);

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
