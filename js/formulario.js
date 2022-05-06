const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const camnav=document.getElementById('iniciarsecion');
var condicionsesion=Boolean;
/* const usuario = admin;
const pass = admin; */
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    alert("Inicio Secion Exitoso")
    
    camnav.innerText="Cerrar sesion";
    var elem = document.createElement("i");
    elem.classList.add("fa-solid");
    elem.classList.add("fa-user");
    elem.classList.add("icono");
    
    camnav.appendChild(elem);
    let a=document.getElementById('iniciarsecion');
    a.setAttribute("href", "http://www.google.es");
    condicionsesion=true;
    // window.location.href = "../index.html";
    let verificar = document.getElementById("iniciarsecion").textContent;
    console.log(verificar);
	
});

if (condicionsesion==true) {
    camnav.innerText="Cerrar sesion";
    var elem = document.createElement("i");
    elem.classList.add("fa-solid");
    elem.classList.add("fa-user");
    elem.classList.add("icono");
    elem.classList.add("mx-2");
    camnav.appendChild(elem);
} else {
    camnav.innerText="iniciar secion";
    var elem = document.createElement("i");
    elem.classList.add("fa-solid");
    elem.classList.add("fa-user");
    elem.classList.add("icono");
    elem.classList.add("mx-2");
    camnav.appendChild(elem);
}