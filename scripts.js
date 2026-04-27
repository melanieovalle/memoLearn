//const cards = document.querySelectorAll('.green-flashcard');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const topicName = card.querySelector('h2').innerText;
        alert('You selected: ${topicName}')
    })
})

// functions for signup, login and local storage set up. 

function handleSignup1() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    emailError.classList.remove('visible');
    passwordError.classList.remove('visible');
    document.getElementById('email').classList.remove('error');
    document.getElementById('password').classList.remove('error');

    let valid = true;
    if (!email.trim()) {
        emailError.classList.add('visible');
        document.getElementById('email').classList.add('error');
        valid = false;
    }
    if (!password || password.length < 6) {
        passwordError.classList.add('visible');
        document.getElementById('password').classList.add('error');
        valid = false;
    }
    if (!valid) {
        alert('Please enter a valid email and a password with at least 6 characters.');
        return;
    }

    // store in localStorage
    localStorage.setItem('signupEmail', email);
    localStorage.setItem('signupPassword', password);
    window.location.href = 'signup2.html';
}

function handleSignup2() {
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');

    nameError.classList.remove('visible');
    document.getElementById('name').classList.remove('error');

    if (!name.trim()) {
        nameError.classList.add('visible');
        document.getElementById('name').classList.add('error');
        alert('Please enter your full name.');
        return;
    }

    // store in localStorage
    localStorage.setItem('signupName', name);
    window.location.href = 'signup3.html';
}

function handleSignup3() {
    const reason = document.querySelector('input[name="reason"]:checked');
    const reasonError = document.getElementById('reasonError');

    reasonError.classList.remove('visible');

    if (!reason) {
        reasonError.classList.add('visible');
        alert('Please select a reason.');
        return;
    }

    // store in localStorage
    localStorage.setItem('signupReason', reason.value);
    // also store the final data
    localStorage.setItem('userName', localStorage.getItem('signupName'));
    localStorage.setItem('userEmail', localStorage.getItem('signupEmail'));
    localStorage.setItem('userPassword', localStorage.getItem('signupPassword'));
    localStorage.setItem('userReason', reason.value);
    alert('You’re all set!');
    window.location.href = 'index.html';
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


