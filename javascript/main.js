var dateExpired = new Date('11/12/2018');
var nowDate =  new Date();


if (nowDate < dateExpired) {
    window.location.href = "sessionexpired.html";
    
} else{
    // alert("Welcome");
    // return false;
}



function validationFormulaire() {
    

    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var telephone = document.getElementById("telephone").value;
    var ville = document.getElementById("ville").value;
    var sexe = document.querySelector('input[name="genre"]:checked').value;
    

    
    if(nom == null || nom == '' ) {
        alert("Veuillez remplir le champs nom");
        return false;
       
    } else if(prenom == null || prenom == '' ) {
        alert("Veuillez remplir le champs prenom");
        return false;
        
    } else if(telephone == null || telephone == '' ) {
        alert("Veuillez remplir le champs telephone");
        return false;
    } else if(ville == null || ville == '' ) {
        alert("Veuillez remplir le champs ville");
        return false;
    } else if(sexe == null || sexe == '' ) {
        alert("Veuillez remplir le champs sexe");
        return false;
    }
    else if(sexe == 'masculin'){
        
        document.location.href = "monsieur.html";
        // alert('dwed')
        return false;
        
    } else if(sexe == 'feminin'){
        document.location.href = "madame.html";
        return false;
        
    } else{
        alert("Oups pas de sexe!!!!");
        return false;
    }

   
    
}
