const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function openPageWithTor() {
    let options = new chrome.Options();
    // Configurez Chrome pour utiliser le proxy Tor
    // Assurez-vous que le service Tor est lancé et écoute sur le port 9050
    options.addArguments('--proxy-server=socks5://127.0.0.1:9050');

    (async function toggleCheckbox() {
        let driver = await new Builder().forBrowser('chrome').build();
    
        try {
            // Remplacez l'URL ci-dessous par l'URL de la page que vous souhaitez tester
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
            console.log(div);
            // let firstInput = await div.findElement(By.css('p input:first-of-type'));
            let firstInput = await div.findElement(By.css('p input:first-of-type'));
            console.log(firstInput);
            // await firstInput.click();

            await driver.executeScript("arguments[0].click();", firstInput);

            // Ajoutez ici toute autre action ou vérification
    
        } finally {
            // await driver.quit();
        }
    })();
})();
