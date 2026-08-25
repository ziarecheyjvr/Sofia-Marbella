import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

const routes = [
  'programs',
  'shop',
  'discounts',
  'events-and-travels',
  'booking',
  'quiz',
  'privacy',
  'terms',
  'order-success',
  'order-confirmation'
];

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html not found!');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexHtmlPath, 'utf-8');

// Also create 404.html in dist
fs.writeFileSync(path.join(distDir, '404.html'), indexContent);
console.log('✓ Created dist/404.html fallback');

// Create route folders with index.html for zero-config static hosting
routes.forEach((route) => {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexContent);
  console.log(`✓ Created dist/${route}/index.html`);
});

console.log('🎉 SPA Static Route pre-generation complete! Direct URLs are now accessible on all static hosts.');
