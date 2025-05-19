const fs = require('fs');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');
const { remote } = require('webdriverio');

describe('Visual Comparison Test', () => {
    let browser1, browser2;

    before(async () => {
        browser1 = await remote({
            logLevel: 'error',
            path: '/',
            capabilities: {
                browserName: 'chrome'
            }
        });

        browser2 = await remote({
            logLevel: 'error',
            path: '/',
            capabilities: {
                browserName: 'chrome'
            }
        });
    });

    after(async () => {
        await browser1.deleteSession();
        await browser2.deleteSession();
    });

    const takeScreenshot = async (browser, elementLocator = null) => {
        let screenshot;
        if (elementLocator) {
            const element = await browser.$(elementLocator);
            screenshot = await element.saveScreenshot();
        } else {
            screenshot = await browser.saveScreenshot();
        }
        return screenshot;
    };

    const compareImage = (img_1, img_2) => {
        const img1 = PNG.sync.read(img_1);
        const img2 = PNG.sync.read(img_2);
        const { width, height } = img1;
        const diff = new PNG({ width, height });

        const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });

        return numDiffPixels === 0;
    };

    it('Should compare screenshots from two browsers', async () => {
        const url = 'https://the-internet.herokuapp.com/tinymce';

        // Перейдите на страницу
        await browser1.url(url);
        await browser2.url(url);

        // Выполните действия в редакторе
        const performEditorActions = async (browser) => {
            const iframe = await browser.$('iframe#mce_0_ifr');
            await browser.switchToFrame(iframe);
            const editorBody = await browser.$('#tinymce');
            await editorBody.click();
            await editorBody.keys(['Control', 'a']);
            await editorBody.keys(['Control', 'b']);
            await browser.switchToParentFrame();

            // Открыть меню Format -> Text color -> Red
            await browser.$('button[aria-label="Format"]').click();
            await browser.$('div[title="Text color"]').click();
            await browser.$('div[title="Red"]').click();
        };

        await performEditorActions(browser1);
        await performEditorActions(browser2);

        // Сделайте скриншот элемента iframe
        const screenshot1 = await takeScreenshot(browser1, 'iframe#mce_0_ifr');
        const screenshot2 = await takeScreenshot(browser2, 'iframe#mce_0_ifr');

        // Сохраните буферы скриншотов для отладки (опционально)
        fs.writeFileSync('./screenshots/browser1_iframe.png', screenshot1);
        fs.writeFileSync('./screenshots/browser2_iframe.png', screenshot2);

        // Сравните скриншоты
        const comparisonResult = compareImage(screenshot1, screenshot2);
        console.log(`Comparison result: ${comparisonResult}`);
        expect(comparisonResult).toBe(true);
    });
});
