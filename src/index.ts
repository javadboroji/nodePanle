import 'dotenv/config';
import express, { Request, Response } from "express";
import cors from 'cors';
import initDB from './database/init.js';
import dotenv from "dotenv";
import router from './routes/api/index.js';

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
//run server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

