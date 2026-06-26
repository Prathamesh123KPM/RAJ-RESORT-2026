import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import express from 'express';
import { fileURLToPath } from 'url';
import { blogPosts } from './src/data/blogPosts.ts';

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
    ...blogPosts.map(post => `/blog/${post.slug}`)
];

const PORT = 54321;

function generateSitemap(routesList) {
    console.log('Generating sitemap.xml...');
    const domain = 'https://rajresortkelva.com';
    const today = new Date().toISOString().split('T')[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    for (const route of routesList) {
        const url = `${domain}${route === '/' ? '' : route}`;
        let priority = '0.7';
        let changefreq = 'weekly';

        if (route === '/') {
            priority = '1.0';
            changefreq = 'daily';
        } else if (['/rooms', '/amenities', '/location', '/contact', '/blog'].includes(route)) {
            priority = '0.9';
            changefreq = 'weekly';
        }

        xml += `  <url>\n`;
        xml += `    <loc>${url}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <changefreq>${changefreq}</changefreq>\n`;
        xml += `    <priority>${priority}</priority>\n`;
        xml += `  </url>\n`;
    }

    xml += `</urlset>\n`;

    // Write to public/
    const publicPath = path.resolve(__dirname, 'public');
    if (fs.existsSync(publicPath)) {
        fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), xml);
        console.log('Successfully wrote sitemap.xml to public/');
    }

    // Write to dist/
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
        fs.writeFileSync(path.join(distPath, 'sitemap.xml'), xml);
        console.log('Successfully wrote sitemap.xml to dist/');
    }
}

async function prerender() {
    console.log('Starting prerender sequence...');
    const app = express();
    const distPath = path.resolve(__dirname, 'dist');

    if (!fs.existsSync(distPath)) {
        console.error('dist folder not found. Did you run vite build?');
        process.exit(1);
    }

    // Keep a pristine original index.html in memory so static hosts and routes can use it
    const originalIndex = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');

    app.use(express.static(distPath));

    app.use((req, res) => {
        res.send(originalIndex);
    });

    const server = app.listen(PORT, async () => {
        console.log(`Prerender server running on port ${PORT}`);

        try {
            const browser = await puppeteer.launch({ headless: "new" });

            for (const route of routes) {
                console.log(`Prerendering ${route}...`);
                const page = await browser.newPage();

                page.on('pageerror', err => {
                    console.error(`[RUNTIME ERROR] ${route}:`, err.message);
                });

                page.on('console', msg => {
                    if (msg.type() === 'error') {
                        console.error(`[CONSOLE ERROR] ${route}:`, msg.text());
                    }
                });

                await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });

                // Let framer-motion animations settle
                await new Promise(r => setTimeout(r, 1000));

                const html = await page.content();
                await page.close();

                // Strip inline styles injected by Framer Motion to optimize SEO crawler indexing and clean up HTML files
                const cleanHtml = html.replace(/ style="[^"]*"/g, '');

                const isRoot = route === '/';
                const dumpPath = isRoot ? path.join(distPath, 'index.html') : path.join(distPath, route, 'index.html');

                fs.mkdirSync(path.dirname(dumpPath), { recursive: true });
                fs.writeFileSync(dumpPath, cleanHtml);
            }

            fs.writeFileSync(path.join(distPath, '404.html'), originalIndex);

            console.log('Prerendering completed successfully!');
            await browser.close();
            server.close();

            // Generate sitemap dynamically
            generateSitemap(routes);

            process.exit(0);
        } catch (e) {
            console.error('Error during prerender:', e);
            server.close();
            process.exit(1);
        }
    });
}

prerender();
