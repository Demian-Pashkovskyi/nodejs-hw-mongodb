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

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1); // Можливо, ви захочете обробити це по-іншому
});
