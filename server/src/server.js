import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import pool from './config/db.js';

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('This is a test for nodemon');
});

const start = async () => {
    try {
        await pool.query('SELECT 1');
        console.log("Database connection verified");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch(err){
        console.error("Failed to connect to the database", err);
        process.exit(1);
    }
}

start();
