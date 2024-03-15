const { exec } = require('child_process');
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');



(async function openPageWithTor() {

    renewTorIdentity();
    await new Promise(resolve => setTimeout(resolve, 3000));

    (async function toggleCheckbox() {
        let options = new chrome.Options();
        let driver = await new Builder().forBrowser('chrome').setChromeOptions(
            options.addArguments('--proxy-server=socks5://127.0.0.1:9050')
        ).build();
    
        try {

            let fetchScript = `
                var callback = arguments[arguments.length - 1];
                await fetch("https://www.talenteo.fr/wp/wp-admin/admin-ajax.php", {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
                        "sec-ch-ua": "\\"Chromium\\";v=\\"122\\", \\"Not(A:Brand\\";v=\\"24\\", \\"Google Chrome\\";v=\\"122\\"",
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "sec-ch-ua-platform": "\\"Linux\\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "x-requested-with": "XMLHttpRequest"
                    },
                    "referrer": "https://www.talenteo.fr/talenteo-awards-2024-vote/",
                    "referrerPolicy": "no-referrer-when-downgrade",
                    "body": "action=polls&view=process&poll_id=10&poll_10=168&poll_10_nonce=55f0c9eb4a",
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                })
                .then(response => response.text())
                .then(data => callback(data))
                .catch(error => callback('Error: ' + error));
            `;

            // await driver.get('https://check.torproject.org');

            // const response = await driver.executeScript(fetchScript);
            await driver.executeAsyncScript(fetchScript).then(function(result) {
                console.log(`REPONSE ${result}`);
            });

        } catch(error) {
            console.log(error);  
        } finally {
            // await drive.sleep(2000);
            await driver.quit();
        }
    })();
})();

function renewTorIdentity() {
    const command = `(echo AUTHENTICATE "coucou"; echo SIGNAL NEWNYM; echo QUIT) | nc localhost 9051`;
    try {
        exec(command);
        console.log('Tor identity renewed');
    } catch (error) {
        console.error('Failed to renew Tor identity:', error);
    }
}



// ( async function Test() {
//     try {
//     const response = await fetch("https://www.talenteo.fr/wp/wp-admin/admin-ajax.php", {
//         "headers": {
//             "accept": "*/*",
//             "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
//             "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//             "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
//             "sec-ch-ua-mobile": "?0",
//             "sec-ch-ua-platform": "\"Linux\"",
//             "sec-fetch-dest": "empty",
//             "sec-fetch-mode": "cors",
//             "sec-fetch-site": "same-origin",
//             "x-requested-with": "XMLHttpRequest"
//         },
//         "referrer": "https://www.talenteo.fr/talenteo-awards-2024-vote/",
//         "referrerPolicy": "no-referrer-when-downgrade",
//         "body": "action=polls&view=process&poll_id=10&poll_10=168&poll_10_nonce=55f0c9eb4a",
//         "method": "POST",
//         "mode": "cors",
//         "credentials": "include"
//     });
    
//     console.log(response);
//     console.log(response.body);
//     console.log(response.content);
// } catch(error) {
//     console.log(error);
// }
// })();
