
const { Builder, Browser } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/chrome');

(async function openPageWithTor() {
  // Configurez Selenium pour utiliser le proxy Tor
  let proxy = 'socks5://127.0.0.1:9050'; // Assurez-vous que le port correspond à votre configuration Tor

  let options = new firefox.Options();
  // // Spécifiez le chemin vers l'exécutable Firefox
  // // Remplacez '/chemin/vers/firefox' par le chemin réel de l'exécutable Firefox sur votre système
  options.setBinary('/usr/bin/chrome');
  options.setPreference("network.proxy.type", 1);
  options.setPreference("network.proxy.socks", "127.0.0.1");
  options.setPreference("network.proxy.socks_port", 9050);
  options.setPreference("network.proxy.socks_version", 5);
  options.setPreference("network.proxy.socks_remote_dns", true);
  options.setProfile('/home/punky/snap/firefox/common/.mozilla/firefox/mshfkrnq.default');


   // Chemin vers l'exécutable Firefox - assurez-vous qu'il est correct
   let service = new firefox.ServiceBuilder('/usr/bin/geckodriver');


  // Créez une instance de WebDriver pour Firefox
  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setFirefoxOptions(options)
    .build();

  try {
    // Accédez à la page via Tor
    await driver.get('https://check.torproject.org');
    // Ajoutez ici toute action supplémentaire que vous souhaitez effectuer sur la page
  } finally {
    // await driver.quit();
  }
})();
