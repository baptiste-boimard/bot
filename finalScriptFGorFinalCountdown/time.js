const time = {

  addSecondsToTime: function(time, secondsToAdd) {
    // Destructurer l'objet temps initial pour obtenir les heures, les minutes et les secondes
    let { hour, minute, second } = time;
  
    // Convertir le temps total en secondes et ajouter les secondes supplémentaires
    let totalSeconds = hour * 3600 + minute * 60 + second + secondsToAdd;
  
    // Calculer les nouvelles heures, minutes et secondes
    let newHour = Math.floor(totalSeconds / 3600) % 24; // Utilise % 24 pour gérer le cas où on dépasse 24 heures
    let newMinute = Math.floor((totalSeconds % 3600) / 60);
    let newSecond = totalSeconds % 60;
  
    // Retourner le nouvel objet temps
    return { hour: newHour, minute: newMinute, second: newSecond };
  },

  addSecondsToCurrentTime: function(secondsToAdd) {
    // Obtenir l'heure actuelle
    let now = new Date();

    // Ajouter les secondes à l'heure actuelle
    now.setSeconds(now.getSeconds() + secondsToAdd);

    // Extraire les heures, les minutes et les secondes
    let newHour = now.getHours();
    let newMinute = now.getMinutes();
    let newSecond = now.getSeconds();

    // Retourner le nouvel objet temps
    return { hour: newHour, minute: newMinute, second: newSecond };
}
  

}


module.exports = time;