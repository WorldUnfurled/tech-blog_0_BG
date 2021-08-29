loginHandler = async e => {
    e.preventDefault();

    const user = document.querySelector('#login-username');
    const pass = document.querySelector('#login-password');

    const res = await fetch('api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username: user.value,
            password: pass.value
        }),

        headers: { 'Content-Type': 'application/json' }
    });

    res.ok
    ? document.location.replace('./dashboard')
    : alert('Login Failed.')
}

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', loginHandler);