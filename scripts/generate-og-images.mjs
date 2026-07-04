// Konvertiert alle Hero-SVGs in public/images/ zu 1200x630 PNGs für Open Graph.
// Aufruf: node scripts/generate-og-images.mjs
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const dir = path.resolve('public/images');
const files = (await readdir(dir)).filter(f => f.endsWith('.svg'));

for (const file of files) {
  const out = path.join(dir, file.replace(/\.svg$/, '.png'));
  await sharp(path.join(dir, file), { density: 96 })
    .resize(1200, 630, { fit: 'cover' })
    .png()
    .toFile(out);
  console.log(`✓ ${file} → ${path.basename(out)}`);
}
