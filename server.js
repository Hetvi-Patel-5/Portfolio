const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index'); // Render index.ejs
});

app.get('/about', (req, res) => {
    res.render('about'); // Render about.ejs
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
