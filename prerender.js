import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
    '/',
    '/rooms',
    '/amenities',
    '/gallery',
    '/location',
    '/contact',
    '/blog',
    '/blog/top-5-things-to-do-at-kelva-beach',
    '/blog/why-raj-resort-is-the-best-beachfront-getaway',
    '/blog/guide-to-local-cuisine-at-kelva-beach',
    '/blog/best-resort-in-kelva-for-family',
    '/blog/wedding-resorts-in-palghar',
    '/blog/1-day-picnic-resort-in-kelva'
];

const PORT = 54321;

async function prerender() {
    console.log('Starting prerender sequence...');
    const app = express();
    const distPath = path.resolve(__dirname, 'dist');

    if (!fs.existsSync(distPath)) {
        console.error('dist folder not found. Did you run vite build?');
        process.exit(1);
    }

    app.use(express.static(distPath));

    app.use((req, res) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
    });

    const server = app.listen(PORT, async () => {
        console.log(`Prerender server running on port ${PORT}`);

        try {
            const browser = await puppeteer.launch({ headless: "new" });

            // Keep a pristine original index.html so static hosts can use it as a 404 SPA fallback
            const originalIndex = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');

            for (const route of routes) {
                console.log(`Prerendering ${route}...`);
                const page = await browser.newPage();

                await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });

                // Let framer-motion animations settle
                await new Promise(r => setTimeout(r, 1000));

                const html = await page.content();
                await page.close();

                const isRoot = route === '/';
                const dumpPath = isRoot ? path.join(distPath, 'index.html') : path.join(distPath, route, 'index.html');

                fs.mkdirSync(path.dirname(dumpPath), { recursive: true });
                fs.writeFileSync(dumpPath, html);
            }

            fs.writeFileSync(path.join(distPath, '404.html'), originalIndex);

            console.log('Prerendering completed successfully!');
            await browser.close();
            server.close();
            process.exit(0);
        } catch (e) {
            console.error('Error during prerender:', e);
            server.close();
            process.exit(1);
        }
    });
}

prerender();
