const schedule = require('node-schedule');
const openPageWithTor = require('./chrome')

// Planifier une tâche pour s'exécuter à une heure spécifique
const job = schedule.scheduleJob({hour: 9, minute: 5, second: 12}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 42000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7860000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 7:12 !");
});

