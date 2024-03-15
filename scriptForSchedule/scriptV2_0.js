const schedule = require('node-schedule');
const openPageWithTor = require('../chrome')

// Planifier une tâche pour s'exécuter à une heure spécifique
const job = schedule.scheduleJob({hour: 7, minute: 42, second: 12}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 177000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 6920000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 07:42 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job2 = schedule.scheduleJob({hour: 9, minute: 43, second: 26}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 228000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7080000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 09:43 !");
});


// Planifier une tâche pour s'exécuter à une heure spécifique
const job3 = schedule.scheduleJob({hour: 11, minute: 48, second: 42}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 117000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 6600000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 11:48 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job4 = schedule.scheduleJob({hour: 13, minute: 42, second: 7}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 230000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7140000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 13:42 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job5 = schedule.scheduleJob({hour: 15, minute: 48, second: 36}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 343000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 6180000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 15:48 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job6 = schedule.scheduleJob({hour: 17, minute: 39, second: 51}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 111000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 6900000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 17:39 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job7 = schedule.scheduleJob({hour: 19, minute: 40, second: 23}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 140000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7320000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 19:40 !");
});


// Planifier une tâche pour s'exécuter à une heure spécifique
const job8 = schedule.scheduleJob({hour: 21, minute: 45, second: 49}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 138000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7200000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 21:45 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job9 = schedule.scheduleJob({hour: 23, minute: 48, second: 31}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 254000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7380000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 23:48 !");
});