// server.js
import express from 'express';
import { fetchShopifyProducts } from './shopifyApi.js';
import { insertProductsIntoDatabase } from './schema.js';
import 'dotenv/config';


const app = express();
const PORT = process.env.PORT || 5000;

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