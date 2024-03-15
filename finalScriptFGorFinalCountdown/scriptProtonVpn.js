const { verify } = require('crypto');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Création d'une méthode asynchrone pour executer les commandes terminal
async function executeCommand(command) {
  try {
    const { stdout, stderr } = await exec(command);
    if (stdout) {
      // console.log('Sortie de la commande :', stdout);
      return stdout
    } 
      
    if (stderr) console.error('Erreur :', stderr);
  } catch (error) {
    console.error('Erreur lors de l’exécution de la commande :', error);
  }
};

// Fonction de delay asynchrone entre chaque vote
function delay(ms) {
  console.log(`Délai d'attente de ${ms}ms entre 2 votes`);
  return new Promise(resolve => setTimeout(resolve, (ms)))
};

// Fonction d'éxécution des votes
async function botByProton(serversArray, delayens) {
  let vote = 0;
  // Itération pour changer de server en suivant la liste
  for (let index = 0; index < serversArray.length; index++) {

    try {
      // Démarrage à protonvpn-cli et connexion à un serveur
      // await executeCommand("protonvpn-cli login bouketin28@gmail.com");

      // Connexion au server dans la liste
      await executeCommand(`protonvpn-cli connect ${serversArray[index]} -p udp`);

      // Demande de status de la connexion
      await executeCommand("protonvpn-cli status");

      // Exécution du script PowerShell de la requête de vote
      const response = await executeCommand("pwsh -File /home/baptiste/Code/Projets/bot/carab.ps1");
      if(response.includes("Vous avez déjà voté pour ce sondage") === false) {
        vote ++;
      }
      // Déconnexion de ProtonVPN
      await executeCommand("protonvpn-cli d");

      await delay(delayens);

    } catch (error) {
      console.log(error);
    }
  }
  return vote;
};

module.exports = botByProton;