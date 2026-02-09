const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

async function compressImage(inputPath, outputPath) {
  try {
    const stats = await fs.promises.stat(inputPath);
    const ext = path.extname(inputPath).toLowerCase();
    
    if (ext === '.png') {
      // Convert PNG to JPEG with high quality
      await sharp(inputPath)
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(outputPath);
      console.log(`✓ Compressed ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      // Recompress JPEG (use temp file if same path)
      const tempPath = outputPath === inputPath 
        ? path.join(path.dirname(inputPath), 'temp_' + path.basename(inputPath))
        : outputPath;
      
      await sharp(inputPath)
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(tempPath);
      
      if (tempPath !== outputPath) {
        await fs.promises.rename(tempPath, outputPath);
      }
      
      console.log(`✓ Compressed ${path.basename(inputPath)}`);
    } else {
      console.log(`⚠ Skipped ${path.basename(inputPath)} (unsupported format)`);
      return false;
    }
    
    const newStats = await fs.promises.stat(outputPath);
    const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    console.log(`  Size: ${(stats.size / 1024).toFixed(1)}KB -> ${(newStats.size / 1024).toFixed(1)}KB (${savings}% reduction)`);
    return true;
  } catch (error) {
    console.error(`✗ Error compressing ${path.basename(inputPath)}:`, error.message);
    return false;
  }
}

async function main() {
  try {
    const files = await fs.promises.readdir(imagesDir);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} images to compress...\n`);

    // Create backup directory
    const backupDir = path.join(imagesDir, 'backup');
    if (!fs.existsSync(backupDir)) {
      await fs.promises.mkdir(backupDir, { recursive: true });
    }

    // Backup and compress each image
    for (const file of imageFiles) {
      const inputPath = path.join(imagesDir, file);
      const backupPath = path.join(backupDir, file);
      const ext = path.extname(file).toLowerCase();
      
      // Backup original
      if (!fs.existsSync(backupPath)) {
        await fs.promises.copyFile(inputPath, backupPath);
      }
      
      // Compress
      if (ext === '.png') {
        // Convert PNG to JPEG
        const outputPath = path.join(imagesDir, path.basename(file, ext) + '.jpg');
        await compressImage(inputPath, outputPath);
      } else {
        // Recompress JPEG in place
        await compressImage(inputPath, inputPath);
      }
    }

    console.log(`\n✓ Compression complete! Originals backed up to: ${backupDir}`);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
