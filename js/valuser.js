const datosusuario = function(){
    
    var nom = document.getElementById("inputnombre").value;
    var pass = document.getElementById("floatingPassword").value;
    if (nom == "") {
        document.getElementById("inputnombre").focus();
    } else {
        if (condition) {
            document.getElementById("floatingPassword").focus();
        } else {
            alert(nom+" "+pass);
            document.getElementById("inputnombre").value="";
            document.getElementById("floatingPassword").value="";
            window.location.href = "https://professor-falken.com";
        }
        
    }
    
}