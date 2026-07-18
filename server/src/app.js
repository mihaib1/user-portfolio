import express from 'express';
import cors from 'cors';
import logger from './utils/logger.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

logger.info("App is running");

app.get('/health', (req, res) => {
    res.json({status: "ok"});
});

app.use(errorHandler);

export default app;