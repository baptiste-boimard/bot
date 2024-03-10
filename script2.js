const schedule = require('node-schedule');
const openPageWithTor = require('./chrome')

// Planifier une tâche pour s'exécuter à une heure spécifique
const job = schedule.scheduleJob({hour: 23, minute: 33}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 169000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 4380000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 23:33 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job2 = schedule.scheduleJob({hour: 0, minute: 49}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 169000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 130000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 00:49 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job3 = schedule.scheduleJob({hour: 7, minute: 11}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 437000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 7860000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 00:49 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job4 = schedule.scheduleJob({hour: 9, minute: 30}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 197000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 6900000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 00:49 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job5 = schedule.scheduleJob({hour: 9, minute: 30}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 152000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 8340000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 00:49 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job6 = schedule.scheduleJob({hour: 15, minute: 54}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 62000);

  // Arrêter la tâche après 2 heures
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 4680000); // 7200000 millisecondes équivalent à 2 heures

  console.log("Tâche exécutée à 15:40 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job7 = schedule.scheduleJob({hour: 17, minute: 3}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 83000);

  // Arrêter la tâche après 2 heures/
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 5100000); // 7200000 millisecondes équivalent à 2 heures
  console.log("Tâche exécutée à 17:03 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job8 = schedule.scheduleJob({hour: 18, minute: 33}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 52000);

  // Arrêter la tâche après 2 heures/
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 8400000); // 7200000 millisecondes équivalent à 2 heures
  console.log("Tâche exécutée à 17:03 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job9 = schedule.scheduleJob({hour: 20, minute: 56}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 51000);

  // Arrêter la tâche après 2 heures/
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 2160000); // 7200000 millisecondes équivalent à 2 heures
  console.log("Tâche exécutée à 17:03 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job10 = schedule.scheduleJob({hour: 20, minute: 56}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 51000);

  // Arrêter la tâche après 2 heures/
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 2160000); // 7200000 millisecondes équivalent à 2 heures
  console.log("Tâche exécutée à 20:56 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job11 = schedule.scheduleJob({hour: 21, minute: 39}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 219000);

  // Arrêter la tâche après 2 heures/
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 6360000); // 7200000 millisecondes équivalent à 2 heures
  console.log("Tâche exécutée à 21:39 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job12 = schedule.scheduleJob({hour: 23, minute: 20}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 109000);

  // Arrêter la tâche après 2 heures/
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 3060000); // 7200000 millisecondes équivalent à 2 heures
  console.log("Tâche exécutée à 23:20 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job13 = schedule.scheduleJob({hour: 1, minute: 22}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 20000);

  // Arrêter la tâche après 2 heures/
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 10000); // 7200000 millisecondes équivalent à 2 heures
  console.log("Tâche exécutée à 01:22 !");
});

// Planifier une tâche pour s'exécuter à une heure spécifique
const job14 = schedule.scheduleJob({hour: 2, minute: 48}, function(){

  // Exécuter la tâche toutes les 32 secondes
  const interval = setInterval(openPageWithTor, 20000);

  // Arrêter la tâche après 2 heures/
  setTimeout(() => {
    clearInterval(interval);
    console.log("Arrêt de la tâche récurrente", new Date());
  }, 10000); // 7200000 millisecondes équivalent à 2 heures
  console.log("Tâche exécutée à 02:48 !");
});