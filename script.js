// const puppeteer = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
  // Options pour lancer Chrome avec le proxy Tor
  const launchOptions = {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--proxy-server=socks5://127.0.0.1:9050', // Assurez-vous que ce port correspond à celui de votre Tor
    ],
    headless: false // Mettez à true si vous ne voulez pas voir le navigateur
  };

  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();

  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
    // Ajoutez d'autres en-têtes si nécessaire
});
  // Naviguer vers une page de test pour vérifier l'adresse IP
  await page.goto('https://check.torproject.org/', {waitUntil: 'networkidle0', timeout: 0});
  
  // Vérifiez la page pour confirmer que vous êtes connecté via Tor
  const isUsingTor = await page.$eval('body', el =>
    el.innerHTML.includes('Congratulations. This browser is configured to use Tor')
  );
  console.log(`Utilisation de Tor: ${isUsingTor}`);

  // Autres actions...
  
  // await browser.close();
})();
