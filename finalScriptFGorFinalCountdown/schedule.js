const schedule = require('node-schedule');
const serversArray = require('./serversArrays');
const botByProton = require('./scriptProtonVpn');
const time = require('./time')


let newTimeScheduleParams ="";
const scheduleParams = {hour: 21, minute: 12, second: 35};

function scheduleFunction() {
  return new Promise((resolve, reject) => {
    
    const job = schedule.scheduleJob(scheduleParams, async function(){
      console .log(`Schedule Job exécutée à ${scheduleParams.hour}:${scheduleParams.minute}:${scheduleParams.second} !`);
      const finish = await botByProton(serversArray.array10, 3459)
        .then((finish)=> {
          console.log(`Nbr de votes = ${finish} / Job terminé`);
          return time.addSecondsToCurrentTime(10);
        })
        .then((scheduleParams)=> {
          const job = schedule.scheduleJob(scheduleParams, async function(){
            console .log(`Schedule Job exécutée à ${scheduleParams.hour}:${scheduleParams.minute}:${scheduleParams.second} !`);
            const finish = await botByProton(serversArray.array11, 12987)
              .then((finish)=> {
                console.log(`Nbr de votes = ${finish} / Job terminé`);
                return time.addSecondsToCurrentTime(60);
              })
              .then((scheduleParams)=> {
                const job = schedule.scheduleJob(scheduleParams, async function(){
                  console .log(`Schedule Job exécutée à ${scheduleParams.hour}:${scheduleParams.minute}:${scheduleParams.second} !`);
                  const finish = await botByProton(serversArray.array12, 27453)
                    .then((finish)=> {
                      console.log(`Nbr de votes = ${finish} / Job terminé`);
                      return time.addSecondsToCurrentTime(60);
                    })
                    .then((scheduleParams)=> {
                      const job = schedule.scheduleJob(scheduleParams, async function(){
                        console .log(`Schedule Job exécutée à ${scheduleParams.hour}:${scheduleParams.minute}:${scheduleParams.second} !`);
                        const finish = await botByProton(serversArray.array13, 19148)
                          .then((finish)=> {
                            console.log(`Nbr de votes = ${finish} / Job terminé`);
                            return time.addSecondsToCurrentTime(60);
                          })
                          
                      });
                    })
                });
              })
            });
        })
        // .then((scheduleParams)=> {
        //   const job = schedule.scheduleJob(scheduleParams, async function(){
        //     console .log(`Schedule Job exécutée à ${scheduleParams.hour}:${scheduleParams.minute}:${scheduleParams.second} !`);
        //     const finish = await botByProton(serversArray.array2, 1)
        //       .then((finish)=> {
        //         console.log(`Nbr de votes = ${finish} / Job terminé`);
        //         return;
        //       })
        //     });
        // })




    })
  })
  .then(()=> {
    console.log("Vraiement finisg");
    process.exit();
  });
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
