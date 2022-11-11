const puppeteer = require("puppeteer");

const delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

let teste = "You have been hacked!";

module.exports.enviar = async (req, res) => {
  const { name, messageAmount, message } = req.body;
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    );
    const address = "https://web.whatsapp.com/";

    await page.goto(address);

    await page.waitForSelector('[data-testid="search"]');
    await delay(5000);

    await page.click(`span[title="${name}"]`);
    await page.waitForSelector('[data-testid="search"]'); const editor = await page.$("div[tabindex='-1']");

    await editor.focus();

    for (let i = 0; i < messageAmount; i++) {
      await page.evaluate((req) => {
        document.execCommand("InsertText", false, "You have been hacked!");
      });

      await page.click("span[data-testid='send']");
      await delay(500);
    }
  } catch (error) { console.error("error mine", error);
  }
};
