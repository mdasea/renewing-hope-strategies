// Sample dominant colors from the RHS logo so we map the theme to the real brand.
const fs = require('fs');
const { execSync } = require('child_process');

const file = process.argv[2] || 'public/brand/logo.png';

// Use sharp if available; otherwise use a simple PNG parse via nodeanvas-free approach
// This script just uses sharp to downscale + read pixels.

async function main() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.log('sharp not installed; install it first or rely on extracted Wix theme');
    process.exit(0);
  }

  const { data, info } = await sharp(file)
    .resize(64, 64, { fit: 'cover' })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const buckets = new Map();
  for (let i = 0; i < data.length; i += 3) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    // skip pure transparent/white pixels (logo bg is likely white)
    if (r > 248 && g > 248 && b > 248) continue;
    if (r < 8 && g < 8 && b < 8) continue;
    // quantize
    const key = `${Math.round(r/16)*16},${Math.round(g/16)*16},${Math.round(b/16)*16}`;
    const prev = buckets.get(key) || { count: 0, r: 0, g: 0, b: 0 };
    prev.count++;
    prev.r += r; prev.g += g; prev.b += b;
    buckets.set(key, prev);
  }

  const sorted = [...buckets.values()]
    .map(b => ({ count: b.count, r: Math.round(b.r/b.count), g: Math.round(b.g/b.count), b: Math.round(b.b/b.count) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  console.log('Dominant colors (rgb -> hex, by pixel count):');
  for (const c of sorted) {
    const hex = '#' + [c.r, c.g, c.b].map(x => x.toString(16).padStart(2, '0')).join('');
    console.log(`  ${hex}  rgb(${c.r}, ${c.g}, ${c.b})  count=${c.count}`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });