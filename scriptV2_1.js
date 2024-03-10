const schedule = require('node-schedule');
const openPageWithTor = require('./chrome')

// Planifier une tâche pour s'exécuter à une heure spécifique
const job = schedule.scheduleJob({hour: 7, minute: 12, second: 12}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 393000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7860000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 7:12 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job2 = schedule.scheduleJob({hour: 9, minute: 31, second: 26}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 438000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7020000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 9:31 !");
});


// Planifier une tâche pour s'exécuter à une heure spécifique
const job3 = schedule.scheduleJob({hour: 11, minute: 34, second: 42}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 242000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 6540000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 11:34 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job4 = schedule.scheduleJob({hour: 13, minute: 21, second: 7}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 508000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7620000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 13:21 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job5 = schedule.scheduleJob({hour: 15, minute: 31, second: 36}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 820000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7380000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 15:31 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job6 = schedule.scheduleJob({hour: 17, minute: 41, second: 51}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 176000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 5460000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 17:41 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job7 = schedule.scheduleJob({hour: 19, minute: 12, second: 23}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 384000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7680000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 19:12 !");
});


// Planifier une tâche pour s'exécuter à une heure spécifique
const job8 = schedule.scheduleJob({hour: 21, minute: 42, second: 49}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 267000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 6960000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 21:42 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job9 = schedule.scheduleJob({hour: 23, minute: 40, second: 31}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 501000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 70200000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 23:48 !");
});