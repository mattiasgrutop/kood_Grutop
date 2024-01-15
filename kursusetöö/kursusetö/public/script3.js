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
