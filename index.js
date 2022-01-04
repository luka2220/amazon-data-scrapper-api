const express = require('express');
const request = require('request-promise');

// initializing application
const app = express();
const PORT = process.env.PORT || 5000;

// scraperApi key
const apiKey = '0eb542be9615de056212fe4ec0f66896';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

// allows the application to parse JSON input
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Amazon Product Data Scraper API');
});

// fetching product details
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        // gets the data from the productId arg passed
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
})

// fetching product reviews
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;

    try {
        // gets the data from the productId arg passed
        const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
})

// fetching product offers
app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;

    try {
        // gets the data from the productId arg passed
        const response = await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
})

// server will listen on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});