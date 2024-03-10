const schedule = require('node-schedule');
const openPageWithTor = require('./chrome')

// Planifier une tâche pour s'exécuter à une heure spécifique
const job = schedule.scheduleJob({hour: 16, minute: 34}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 109000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 4500000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 16:34 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job2 = schedule.scheduleJob({hour: 17, minute: 53}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 120000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 2280000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 17:43 !");});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job3 = schedule.scheduleJob({hour: 19, minute: 38}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 92000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 4800000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 19:38 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job4 = schedule.scheduleJob({hour: 21, minute: 0}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 15000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7920000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 21:00 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job5 = schedule.scheduleJob({hour: 23, minute: 12}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 207000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 5820000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 23:12 !");
});


// Planifier une tâche pour s'exécuter à une heure spécifique
const job6 = schedule.scheduleJob({hour: 6, minute: 30}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 20000);

  // Arrêter la tâche après 2 heures/
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 10000); // 7200000 millisecondes équivalent à 2 heures
  console.log("Tâche exécutée à 6:30 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job7 = schedule.scheduleJob({hour: 7, minute: 12}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 20000);

  // Arrêter la tâche après 2 heures/
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 10000); // 7200000 millisecondes équivalent à 2 heures
  console.log("Tâche exécutée à 7:12 !");
});
