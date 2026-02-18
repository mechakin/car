const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const backupDir = path.join(__dirname, 'public', 'images', 'backup');
const outputDir = path.join(__dirname, 'public', 'images');

const files = ['apparel.png', 'custom-build.png', 'events.png'];

async function main() {
  for (const file of files) {
    const inputPath = path.join(backupDir, file);
    const baseName = path.basename(file, '.png');
    const outputPath = path.join(outputDir, baseName + '.jpg');

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠ Skipped ${file} (not found in backup)`);
      continue;
    }

    try {
      const stats = await fs.promises.stat(inputPath);
      await sharp(inputPath)
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(outputPath);
      const newStats = await fs.promises.stat(outputPath);
      const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);
      console.log(`✓ ${file} -> ${baseName}.jpg: ${(stats.size / 1024).toFixed(1)}KB -> ${(newStats.size / 1024).toFixed(1)}KB (${savings}% reduction)`);
    } catch (err) {
      console.error(`✗ Error: ${file}`, err.message);
    }
  }
  console.log('\n✓ Done. Compressed images in public/images/');
}

main();
