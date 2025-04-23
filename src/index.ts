import('dotenv/config');
import express from 'express';
import cors from 'cors';
import initDB from './database/init.ts';
import dotenv from 'dotenv';
import router from './routes/api/index.ts';
try {
    dotenv.config();
    const app = express();
    const port = process.env.PORT;
  
    app.use(cors());
    app.use(express.json());
    
    initDB();
    app.use(router);
  
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("App startup error:", err);
  }