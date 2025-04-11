import 'dotenv/config';
import express, { Request, Response } from "express";
import cors from 'cors';
import initDB from './database/init.js';
import dotenv from "dotenv";
import router from './routes/api/index.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' with { type: 'json' };
import authenticateToken from './middleware/authenticateToken.js';

const app = express();
const port = process.env.PORT;

//active cors
app.use(cors());
//active json
app.use(express.json());
//active .env
dotenv.config();
//init database
initDB();

// routes api
app.use(router);

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//run server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

