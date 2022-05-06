

function loggout(evt) { 
    evt.preventDefault()
    localStorage.removeItem('user');

    document.location.href="index.html"; 
}