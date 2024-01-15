const express = require('express');
const axios = require('axios'); // Lisatud Axios API-päringute tegemiseks
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));

// Dummy user data
const users = [];

// API URL
const dogApiUrl = 'https://dog.ceo/api/breeds/image/random';

// Routes
app.get('/', (req, res) => {
    // Lisatud API-päring avalehele
    axios.get(dogApiUrl)
        .then(response => {
            const imageUrl = response.data.message;
            res.sendFile(__dirname + '/public/index.html', { imageUrl });
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
            res.sendFile(__dirname + '/public/index.html');
        });
});

// Ülejäänud kood jääb samaks
// ...

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
