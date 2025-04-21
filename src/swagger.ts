import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Panle API',
        description: 'API Documentation for Panle',
        version: '1.0.0'
    },
    host: 'localhost:8080',
    basePath: '/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Auth',
            description: 'Authentication endpoints'
        }
    ],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization'
        }
    }
};

const outputFile = './../swagger.json';
const routes = ['./src/routes/api/*.ts'];

swaggerAutogen()(outputFile, routes, doc).then(() => {
    import('./index.js');
}); 