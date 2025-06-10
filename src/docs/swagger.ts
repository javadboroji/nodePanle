
import swaggerAutogen from 'swagger-autogen';

const swaggerAutogenInstance  =swaggerAutogen();

const doc = {
    swagger: "2.0",
  info: {
    title: 'My API',
    description: 'Auto-generated Swagger documentation',
    version: "1.0.0",
  },
  host: 'localhost:8080',
  basePath: "/",
  schemes: ['http'],
};

const outputFile = './swagger-output.json'; // خروجی JSON برای Swagger UI
const endpointsFiles = ['../routes/api/index.ts'];     // مسیر اصلی که routeها رو import می‌کنه

swaggerAutogenInstance (outputFile, endpointsFiles, doc);