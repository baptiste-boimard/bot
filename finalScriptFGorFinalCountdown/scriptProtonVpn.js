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
function delay(totalDuration, serversArray) {

  let totalTimeMs = totalDuration * 60 * 60 * 1000; // convertir 8 heures en millisecondes
  let baseDelay = totalTimeMs / serversArray.length;
  let accumulatedDelay = 0;

  // Application du biais pour rendre cela plus humain
  let randomFactor = 0.9 + Math.random() * 0.2; // variation entre 0.9 et 1.1
  let delay = baseDelay * randomFactor;

  // setTimeout(() => {
  //   console.log(`Déllai d'attente de ${delay*1000} s`);
  // }, delay);

  return new Promise(resolve => setTimeout(()=> resolve(delay), delay))
};

// Fonction d'éxécution des votes
async function botByProton(serversArray, totalDuration) {
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
      const goodVote = response.includes("Votez pour vos 3");
      if(goodVote) {
        vote ++;
      }
      // Déconnexion de ProtonVPN
      await executeCommand("protonvpn-cli d");

      await delay(totalDuration, serversArray).then((delayForThisVote) => {
        // const timeleft = ((totalDuration * 60 * 60 * 1000) - delayForThisVote) / (serversArray.length - index)
        console.log(`Délai d'attente de ${(delayForThisVote/1000).toFixed(1)}s / Vote ${index+1} sur ${serversArray.length} / Vote ${goodVote}`);
      });

    } catch (error) {
      console.log(error);
    }
  }
  return vote;
};

module.exports = botByProton;