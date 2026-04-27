//const cards = document.querySelectorAll('.green-flashcard');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const topicName = card.querySelector('h2').innerText;
        alert('You selected: ${topicName}')
    })
})

// functions for signup, login and local storage set up. 

function handleSignup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    emailError.classList.remove('visible');
    passwordError.classList.remove('visible');
    document.getElementById('email').classList.remove('error');
    document.getElementById('password').classList.remove('error');

    let valid = true;

    if (!password || password.length < 6) {
        passwordError.classList.add('visible');
        document.getElementById('password').classList.add('error');
        valid = false;
    }

    if (valid) {
        // store in localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        alert('Signup successful. Login in');
        window.location.href = 'index.html';
    }
}


function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    emailError.classList.remove('visible');
    passwordError.classList.remove('visible');
    document.getElementById('email').classList.remove('error');
    document.getElementById('password').classList.remove('error');

    let valid = true;

    if (!password || password.length < 6) {
        passwordError.classList.add('visible');
        document.getElementById('password').classList.add('error');
        valid = false;
    }

    if (valid) {
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            alert('Login successful');
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password.');
        }
    }
}


