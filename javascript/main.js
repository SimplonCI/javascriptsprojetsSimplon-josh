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
        alert("Veuillez remplir le champs nom")
    } else if(prenom == null || prenom == '' ) {
        alert("Veuillez remplir le champs prenom")
    } else if(telephone == null || telephone == '' ) {
        alert("Veuillez remplir le champs telephone")
    } else if(ville == null || ville == '' ) {
        alert("Veuillez remplir le champs ville")
    } else if(sexe == null || sexe == '' ) {
        alert("Veuillez remplir le champs sexe")
    }
    else{
        window.location.href = "welcome.html";
        // alert("Nom : "+ nom+" ; Prenom : "+prenom+" ; Telephone :"+telephone+" Ville: "+ville+"; Sexe :"+sexe);
    }

    
}
