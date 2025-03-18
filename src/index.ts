import 'dotenv/config';
import express, { Request, Response } from "express";
import cors from 'cors';
import initDB from './database/init.js';

const app = express();
const port = process.env.PORT || 8080;
//active cors
app.use(cors());
//active json
app.use(express.json());
//init database
initDB();
// routes
app.get("/", (req: Request, res: Response) => {
    res.json({ message: 'Hello World!' });
});
//run server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

