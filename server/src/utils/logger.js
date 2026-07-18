import pino from 'pino';
import dotenv from 'dotenv';
dotenv.config();

const logger = pino({
  transport: process.env.NODE_ENV === 'development' ? { target: 'pino-pretty' } : undefined
});

export default logger;