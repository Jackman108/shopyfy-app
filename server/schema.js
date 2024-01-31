import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'spotifydb',
    password: process.env.DB_PASSWORD || 'postgres',
    port: process.env.DB_PORT || 5432,
});
export const fetchProductsFromDatabase = async () => {
    const client = await pool.connect();

    try {
        const result = await client.query('SELECT * FROM products');
        return result.rows;
    } catch (error) {
        console.error('Error fetching products from database:', error);
        throw error;
    } finally {
        client.release();
    }
};
export const insertProductsIntoDatabase = async (products) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        // Create the "products" table if it doesn't exist
        await client.query(`
         CREATE TABLE IF NOT EXISTS products (
             id SERIAL PRIMARY KEY,
             bodyHtml TEXT,
             imageSrc TEXT
         );
      `);
        for (const product of products) {
            const { bodyHtml, images } = product;

            const imageSrc = images && images.edges
                ? images.edges.map(edge => edge.node.src)
                : [];

            // Вставляем продукт в таблицу products
            const insertQuery = `
             INSERT INTO products (bodyHtml, imageSrc) 
             VALUES ($1, $2)
             RETURNING id;
              `;

            const values = [bodyHtml, imageSrc];
            const result = await client.query(insertQuery, values);

            console.log(`Inserted product with id ${result.rows[0].id}`);
        }

        await client.query('COMMIT'); // Фиксируем транзакцию
    } catch (error) {
        await client.query('ROLLBACK'); // Откатываем транзакцию в случае ошибки
        console.error('Error inserting products into database:', error);
        throw error;
    } finally {
        client.release(); // Всегда возвращаем клиента в пул соединений
    }
};
