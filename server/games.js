const puppeteer = require('puppeteer');

const getGames = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://mmo13.ru/games/top');
  await page.waitForSelector('.list-view');
  await page.evaluate(async () => {
    await new Promise((resolve) => {
        window.scrollBy(0, 9999999);
        resolve();
    });
  });
  const data = await page.evaluate(() => {
    const items = document.querySelectorAll('.widget-game-view');
    return Array.from(items).reduce((acc, item) => [...acc, {
      id: +item.closest('.games-view').getAttribute('id').split('-')[1],
      name: item.querySelector('.title a').textContent,
      rating: item.querySelector('.rating .value').textContent,
      ganre: item.querySelector('.ganre').textContent.split(' | ').map(item => item.trim()),
      image: `https://mmo13.ru${item.querySelector('.logo').getAttribute('src')}`,
    }], []);
  }); 
  await browser.close();
  return data;
};

module.exports = { getGames };