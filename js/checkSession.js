if (localStorage.getItem('user')) {
    currUser = localStorage.getItem('user')
    console.log(currUser)

    usersWithoutSession = document.getElementsByClassName('usserWithoutSession')
    for (var i = 0; i < usersWithoutSession.length; i += 1) {
        usersWithoutSession[i].style.display = 'none';
    }

    usersLoggedIn = document.getElementsByClassName('usserLoggedIn')
    for (var i = 0; i < usersLoggedIn.length; i += 1) {
        usersLoggedIn[i].style.display = 'block';
    }
}