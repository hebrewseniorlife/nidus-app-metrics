const puppeteer = require('puppeteer-core');
const edgePaths = require("edge-paths");
const path = require('path');

(async () => {
    let browserPath = edgePaths.getEdgePath();
    console.log(`Browser Path: ${browserPath}`);

    let webPath = path.resolve('./docs/metric.htm');
    console.log(`Web Page: ${webPath}`);

    let screenshotPath = path.resolve('./output/screenshot.png');
    console.log(`Screenshot Path: ${screenshotPath}`);

    const browser = await puppeteer.launch({
        executablePath: browserPath,
        defaultViewport: { width: 650, height: 50}
    });

    const page = await browser.newPage();
    await page.goto(webPath);
    await page.waitForSelector('#metric-loaded');
    await page.screenshot({path: screenshotPath});
    
    await browser.close();
})();