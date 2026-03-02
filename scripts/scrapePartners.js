const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const { JSDOM } = require('jsdom');
const sharp = require('sharp');

const url = 'https://www.safi.sk/partneri/';
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

async function scrape() {
    try {
        console.log('Fetching', url);
        const html = await new Promise((resolve, reject) => {
            https.get(url, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => resolve(data));
            }).on('error', reject);
        });

        const dom = new JSDOM(html);
        const document = dom.window.document;

        const galleryItems = document.querySelectorAll('.gallery-item');
        console.log(`Found ${galleryItems.length} partner items.`);

        let i = 1;
        const results = [];
        for (const item of galleryItems) {
            const img = item.querySelector('img');
            if (img) {
                let imgSrc = img.src;
                if (!imgSrc.startsWith('http')) {
                    imgSrc = 'https://www.safi.sk' + imgSrc;
                }
                const filename = `partner_full_${i}`;
                console.log(`Downloading ${imgSrc}...`);
                const newName = await downloadImage(imgSrc, filename);
                results.push({ name: filename, img: `/images/partners_full/${newName}` });
                i++;
            }
        }

        fs.writeFileSync(path.join(__dirname, '../scripts/partners_data.json'), JSON.stringify(results, null, 2));
        console.log('Scraping complete, saved to partners_data.json');
    } catch (err) {
        console.error('Error:', err);
    }
}

scrape();
