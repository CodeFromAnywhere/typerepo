const browser = await runBrowser();
const browserUrl = await browser.wsEndpoint();

const browser1 = await puppeteer.connect({ browserWSEndpoint: browserUrl });
const page = await browser1.newPage();

await page.goto("https://facebook.com");
const browser2 = await puppeteer.connect({ browserWSEndpoint: browserUrl });

const page2 = await browser2.newPage();
await page2.goto("https://google.com");

const tabs = await browser.pages();
console.log({ tabs });

for await (let tab of tabs) {
const url = await tab.url();
const title = await tab.title();
console.log({ url, title });
}

tabs[1].evaluate(() => {
const emailInput: ElementType | null =
document.querySelector('input[id="email"]');

    const passwordInput: ElementType | null =
      document.querySelector('input[id="pass"]');

    const loginButton: ElementType | null = document.querySelector(
      'button[name="login"]'
    );

    if (emailInput && passwordInput && loginButton) {
      emailInput.value = "bhagya_sah@yahoo.com";
      passwordInput.value = "bhagya199201";
      loginButton.click();
    }

    console.log("run by puppeteer facebook");
    // return texts;

});

console.log("document content loaded google");
tabs[2].evaluate(() => {
const input: ElementType | null = document.querySelector(
'input[class="gLFyf"]'
);
if (input) {
input.value = "apple";
input.focus();
}

    console.log("run by puppeteer google");

});
tabs[2].focus('input[class="gLFyf"]');
tabs[2].keyboard.press("Enter");
setTimeout(async () => {
await tabs[1].goto("https://www.facebook.com/neptechstudio");
tabs[1].$eval('a[aria-label="Add to story"]', (elem: ElementType) => {
elem.click();
});
}, 5000);
const page3 = await browser.newPage();
const page4 = await browser.newPage();
page3.goto("https://google.com");
page4.goto("https://facebook.com");
