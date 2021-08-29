const signupHandler = async e => {
    e.preventDefault();

    const user = document.querySelector('#signup-username');
    const pass = document.querySelector('#signup-password');

    const res = await fetch('/api/user', {

        method: 'POST',
        body: JSON.stringify({
            username: user.value,
            password: pass.value
        }),

        headers: { 'Content-Type': 'application/json' }

    });

    res.ok 
    ? document.location.replace('/dashboard')
    : alert('Signup failed. Please try again.')
}

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', signupHandler);