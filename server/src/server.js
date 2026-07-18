import logger from './utils/logger.js';
import app from './app.js';
import pool from './config/db.js';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('This is a test for nodemon');
});

const start = async () => {
    try {
        await pool.query('SELECT 1');
        logger.info(`Database connection verified!`);

        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
        });
    } catch(err){
        logger.error(`Failed to connect to the database with error ${err}`);
        process.exit(1);
    }
}

start();
