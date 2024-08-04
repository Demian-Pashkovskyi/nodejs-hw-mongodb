import dotenv from 'dotenv';
dotenv.config();

// import { setupServer } from './server.js';
// import { initMongoConnection } from './db/initMongoConnection.js';


// async function bootstrap() {
//     try {
//         await initMongoConnection();
//         setupServer();
//     } catch (error) {
//         console.error('Error while setting up mongo connection', error);
//     }
// }

// bootstrap();

// import { resolve } from 'path';
import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

async function bootstrap() {
    try {
        await initMongoConnection();
        setupServer();
    } catch (error) {
        console.error('Error while setting up mongo connection', error);
    }
}

bootstrap();
