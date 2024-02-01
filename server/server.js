// server.js
import express from 'express';
import cors from 'cors';
import { fetchShopifyProducts } from './shopifyApi.js';
import { insertProductsIntoDatabase, fetchProductsFromDatabase as fetchFromDB } from './schema.js'; // Rename the import to avoid conflicts
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

app.get('/getProducts', async (req, res) => {
    try {
        // Fetch products from the database
        const products = await fetchFromDB(); 
        // Set the Content-Type header to indicate JSON response
        res.setHeader('Content-Type', 'application/json');

        // Send the products as JSON
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products from database:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

app.get('/updateProducts', async (req, res) => {
    try {
        const shopifyProducts = await fetchShopifyProducts();
        await insertProductsIntoDatabase(shopifyProducts);
        res.status(200).json({ success: true, message: 'Products updated successfully' });
    } catch (error) {
        console.error('Error updating products:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
