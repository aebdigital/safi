const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const sharp = require('sharp');

const downloadDir = path.join(__dirname, '../public/images/partners_full');

if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

function downloadImage(imgUrl, filename) {
    return new Promise((resolve, reject) => {
        const client = imgUrl.startsWith('https') ? https : http;
        client.get(imgUrl, (res) => {
            if (res.statusCode !== 200) {
                return reject(new Error(`Failed to download ${imgUrl}: ${res.statusCode}`));
            }
            const data = [];
            res.on('data', chunk => data.push(chunk));
            res.on('end', async () => {
                try {
                    const buffer = Buffer.concat(data);
                    const webpBuffer = await sharp(buffer)
                        .webp({ quality: 90 })
                        .toBuffer();
                    fs.writeFileSync(path.join(downloadDir, filename + '.webp'), webpBuffer);
                    resolve(filename + '.webp');
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

const images = [
    "https://www.safi.sk/wp-content/uploads/2025/03/STAUMAN-logo-3.jpg",
    "https://www.safi.sk/wp-content/uploads/2025/10/hrproject-logo.png",
    "https://www.safi.sk/wp-content/uploads/2025/03/logo-velux.png",
    "https://www.safi.sk/wp-content/uploads/2025/03/logo-renovactive.png",
    "https://www.safi.sk/wp-content/uploads/2025/03/Picture-5.png",
    "https://www.safi.sk/wp-content/uploads/2025/03/image-2.svg",
    "https://www.safi.sk/wp-content/uploads/2025/03/mediderma_logo.webp",
    "https://www.safi.sk/wp-content/uploads/2025/03/Screenshot-2025-03-21-at-11.45.33.png",
    "https://www.safi.sk/wp-content/uploads/2025/03/logo-dark.svg",
    "https://www.safi.sk/wp-content/uploads/2025/05/a3fbd35e-3755-46ac-87d5-b19d5a08865a.jpg",
    "https://www.safi.sk/wp-content/uploads/2025/06/PHOTO-2025-06-14-13-17-00.jpg",
    "https://www.safi.sk/wp-content/uploads/2025/03/logo1.jpg",
    "https://www.safi.sk/wp-content/uploads/2025/03/logo003B-300x120-1.jpg",
    "https://www.safi.sk/wp-content/uploads/2025/03/300-px-nove-pre-web.avif",
    "https://www.safi.sk/wp-content/uploads/2025/03/logo-nova-stvrt-tmave-orez-jpg.jpg",
    "https://www.safi.sk/wp-content/uploads/2025/03/Picture-1-1.png",
    "https://www.safi.sk/wp-content/uploads/2025/03/hsf-system.png",
    "https://www.safi.sk/wp-content/uploads/2025/03/Havamont-LOGO-2.png",
    "https://www.safi.sk/wp-content/uploads/2025/03/image-3.svg",
    "https://www.safi.sk/wp-content/uploads/2025/03/logo-1.png",
    "https://www.safi.sk/wp-content/uploads/2025/03/Picture-14.jpg",
    "https://www.safi.sk/wp-content/uploads/2025/03/logo-1.webp"
];

async function scrape() {
    let i = 1;
    const results = [];
    for (const url of images) {
        try {
            const filename = `partner_full_${i}`;
            console.log(`Downloading ${url}...`);
            const newName = await downloadImage(url, filename);
            results.push({ name: filename, img: `/images/partners_full/${newName}` });
            i++;
        } catch (err) {
            console.error(`Error downloading ${url}:`, err);
        }
    }
    fs.writeFileSync(path.join(__dirname, '../scripts/partners_data.json'), JSON.stringify(results, null, 2));
    console.log('Scraping complete, saved to partners_data.json');
}

scrape();
