const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/images/services');
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(dir, file);
        const outputPath = path.join(dir, path.parse(file).name + '.webp');

        sharp(inputPath)
            .webp({ quality: 90 })
            .toFile(outputPath)
            .then(() => {
                console.log(`Converted ${file} to WebP`);
                fs.unlinkSync(inputPath); // deleting original to force use of webp
            })
            .catch(err => console.error(err));
    }
});
