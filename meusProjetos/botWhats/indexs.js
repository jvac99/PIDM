// https://dev.to/emmanuelthecoder/tutorial-create-a-whatsapp-bot-using-nodejs-and-puppeteer-1fn7
const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    );

    await page.goto("https://web.whatsapp.com/");

    await page.waitForSelector("._2_1_wd");
    await delay(5000);

    const contactName = "Mariana 01";
    await page.click(`span[title="${contactName}"]`);
    await page.waitForSelector(".OTBsx");

    const editor = await page.$("div[tabindex='-1']");

    await editor.focus();

    const amountOfMessages = 10;

    for (let i = 0; i < amountOfMessages; i++) {
      await page.evaluate(() => {
        const message = "Oi querida";
        document.execCommand("InsertText", false, message);
      });

      await page.click("span[data-testid='send']");
      await delay(500);
    }
  } catch (error) {
    console.error(error);
  }
})();

const delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};
