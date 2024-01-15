function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Perform login logic (e.g., check credentials)
    console.log('Login:', email, password);
}

function register() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Perform registration logic (e.g., store user data)
    console.log('Register:', name, email, password);
}

// Switch between login and register forms
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}

function register() {
    const username = document.getElementById('username').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // Validate and store user data in localStorage
    if (username && firstname && lastname && age && gender) {
        const userData = { username, firstname, lastname, age, gender };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to profile page
        window.location.href = 'profile.html';
    } else {
        alert('Please fill in all fields.');
    }
}

