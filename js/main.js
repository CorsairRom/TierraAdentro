const arrayUsuarios = [
    {usuario: "admin", pass: "admin"},
    {usuario: "richard", pass: "12345"},
    {usuario: "wacoldo", pass: "wacoldo"},
    {usuario: "diogenes", pass: "diogenes"},
    
];

function containsObject(array, object) {
    return array.some((e) => Object.entries(e).toString() === Object.entries(object).toString())
}


function inicio(evt) {
    // indexOf // usar  -1 = no se encontro el objeto
    evt.preventDefault();
    let getusuario = document.getElementById('inputnombre').value;
    let getpass = document.getElementById('floatingPassword').value;
    console.log(getusuario);
    console.log(getpass);
    // test = arrayUsuarios.indexOf({usuario: getusuario, pass: getpass})
    let userOb=containsObject(arrayUsuarios, {usuario: getusuario, pass: getpass})
    if (userOb==true) {
        localStorage.setItem('user', 'admin'); // cuando se conecta
        document.location.href="index.html"; // redireccion al home
    } else {
        let denegado = document.getElementById('accesodenegado');
        denegado.innerText="Usuario Incorrecto, Intente denuevo";
        denegado.classList.add("text-danger");
    }
    console.log(userOb);
    
}