import { initMongoConnection } from './db/initMongoConnection.js';

const bootstrap = async () => {
  try {
    await initMongoConnection();
    console.log('Application started successfully');
  } catch (error) {
    console.error('Error during bootstrap:', error);
  }
};

bootstrap();
