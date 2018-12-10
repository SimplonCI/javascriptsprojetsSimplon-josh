var parameters = window.location.search.substring(1).split("&");
console.log(parameters);


var temp = parameters[0].split("=");
var nom = temp[1];



var temp = parameters[1].split("=");
var prenom = temp[1];


var temp = parameters[2].split("=");
var telephone = temp[1];


var temp = parameters[3].split("=");
var ville = temp[1];


var temp = parameters[4].split("=");
var sexe = temp[1];




if(sexe == "masculin"){
    document.getElementById("welcome").innerHTML = "Bienvenue, Monsieur "+nom+" "+prenom
}else if(sexe == "feminin"){
    document.getElementById("welcome").innerHTML = "Bienvenue, Madame "+nom+" "+prenom
}else{
    document.getElementById("welcome").innerHTML = "Bienvenue "+nom+" "+prenom
}