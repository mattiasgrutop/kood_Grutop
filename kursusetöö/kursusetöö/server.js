const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Mälus olev kasutajate andmebaas
const users = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.redirect('/profile');
    } else {
        res.redirect('/login');
    }
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        res.redirect('/register');
    } else {
        users.push({ username, password });
        res.redirect('/login');
    }
});

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/views/profile.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

function getRandomQuote() {
    // API integratsioon kuulsate muusikute tsitaatide saamiseks
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex].text;
            document.getElementById('quote').innerText = randomQuote;
        })
        .catch(error => console.error('Error fetching quotes:', error));
}

