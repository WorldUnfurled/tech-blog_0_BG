const logout = async () => {
    console.log('logged out');

    const res = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    res.ok
    ? document.location.replace('/')
    : alert('Sorry, you can never leave.');
}

const logoutBtn = document.querySelector('#logout-btn');

logoutBtn.addEventListener('click', logout);