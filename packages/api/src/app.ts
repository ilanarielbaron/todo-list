require('dotenv').config();
import express from 'express';
import config from 'config';
import validateEnv from './utils/validateEnv';
import { AppDataSource } from './utils/data-source';
import router from './routes';

AppDataSource.initialize()
  .then(async () => {
    // VALIDATE ENV
    validateEnv();

    const app = express();

    // MIDDLEWARE

    // 1. Body parser
    app.use(express.json({ limit: '10kb' }));

    // ROUTES
    app.use('/items', router);
    const port = config.get<number>('port');
    app.listen(port);

    console.log(`Server started on port: ${port}`);
  })
  .catch((error) => console.log(error));