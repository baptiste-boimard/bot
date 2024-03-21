const schedule = require('node-schedule');
const serversArray = require('./serversArrays');
const botByProton = require('./scriptProtonVpn');
const time = require('./time')


let newTimeScheduleParams ="";
const scheduleParams = {hour:20, minute: 42, second:30};

function scheduleFunction() {
  return new Promise((resolve, reject) => {
    
    const job = schedule.scheduleJob(scheduleParams, async function(){
      console .log(`Schedule Job exécutée à ${scheduleParams.hour}:${scheduleParams.minute}:${scheduleParams.second} !`);
      // const finish = await botByProton(/*serversArray.array54, 6*/)
      await botByProton(/*serversArray.array54, 6*/)
        .then((finish)=> {
          console.log(`Nbr de votes = ${finish} / Job terminé`);
          return time.addSecondsToCurrentTime(0);
        })
    })
  })
  // .then(()=> {
  //   console.log("Vraiement finisg");
  //   process.exit();
  // });
}



// Utiliser la fonction asynchrone avec .then() et .finally()
scheduleFunction()
  .then(resolve => {
      console.log("resultat"); // Traiter le résultat de la promesse résolue
  })
  .catch(erreur => {
      console.error(erreur); // Traiter l'erreur si la promesse est rejetée
  })
  .finally(() => {
      console.log("Exécution terminée, résolue ou rejetée."); // S'exécute toujours à la fin
  });
