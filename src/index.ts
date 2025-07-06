import('dotenv/config');
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express';
import cors from 'cors';
import initDB from './database/init.ts';
import dotenv from 'dotenv';
import router from './routes/api/index.ts';
 import swaggerUi from 'swagger-ui-express';
const swaggerFile = require('./docs/swagger-output.json');

try {
    dotenv.config();
    const app = express();
    const port = process.env.PORT;
  
    app.use(cors());
    app.use(express.json());  
    
    initDB();
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    app.use(router);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`Swagger docs available at http://localhost:${port}/swagger`);
    });
  } catch (err) {
    console.error("App startup error:", err);
  }