const express = require('express');
const request = require('request-promise');

// initializing application
const app = express();
const PORT = process.env.PORT || 5000;

// allows the application to parse JSON input
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Amazon Product Data Scraper');
});

// server will listen on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});