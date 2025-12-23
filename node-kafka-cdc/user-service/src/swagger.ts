import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'User Service API',
        description: 'Auto-generated documentation',
    },
    host: 'localhost:3001', // Change to your production host
    schemes: ['http'],
};

const outputFile = '../swagger-output.json';
// Point to the file that acts as the entry point for your routes
const routes = ['./src/app.ts'];

/* NOTE: If you use ts-node, this will generate the JSON 
   before the app starts */
swaggerAutogen()(outputFile, routes, doc);