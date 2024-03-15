// const renewTorIdentity = require("./newIdentityTor");
// const { execSync } = require('child_process');
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();
// Remplacez 9050 par le port SOCKS de votre instance Tor si différent
options.addArguments('--proxy-server=socks5://127.0.0.1:9050');

(async function openPageWithTor() {



    // renewTorIdentity('coucou');

    // await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 10 secondes



    // let options = new chrome.Options();
    // // Configurez Chrome pour utiliser le proxy Tor
    // options.addArguments('--proxy-server=socks5://127.0.0.1:9050');



    (async function toggleCheckbox() {
        let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    
        try {

            // Remplacez l'URL ci-dessous par l'URL de la page que vous souhaitez tester
            await driver.get('https://check.torproject.org');
            await driver.get('https://www.talenteo.fr/talenteo-awards-2024-vote/#start');
    
            // Remplacez 'checkboxId' par l'ID réel de la checkbox sur votre page
            const checkbox = await driver.findElement(By.id("poll-answer-168"));

            // Vérifiez si la case à cocher est déjà cochée
            const isChecked = await checkbox.isSelected();
    
            if (!isChecked) {
                // Si la case à cocher n'est pas cochée, cliquez dessus pour la cocher
                await checkbox.click();
            }

            const div = await driver.findElement(By.id('polls-10-ans'));
            let firstInput = await div.findElement(By.name('vote'));
            await driver.executeScript("arguments[0].click();", firstInput);
            function renewTorIdentity(password) {
                const command = `echo -e 'AUTHENTICATE "${password}"\\r\\nSIGNAL NEWNYM\\r\\nQUIT' | nc localhost 9051`;
                try {
                  execSync(command);
                  console.log('Tor identity renewed');
                } catch (error) {
                  console.error('Failed to renew Tor identity:', error);
                }
              }
            // Ajoutez ici toute autre action ou vérification
        // }
        } catch(error) {
            console.log(error);  
        } finally {
            await drive.sleep(2000);
            // await driver.quit();   
        }
    })();
})();



