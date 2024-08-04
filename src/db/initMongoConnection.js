import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { env } from '../utils/env.js';


export const initMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=mongodb`,
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw new Error(error);
  }
};



// export async function initMongoConnection() {
//     console.log('MONGODB_USER:', process.env.MONGODB_USER); // Додано для відлагодження
//     console.log('MONGODB_PASSWORD:', process.env.MONGODB_PASSWORD); // Додано для відлагодження
//     console.log('MONGODB_HOST:', process.env.MONGODB_HOST); // Додано для відлагодження
//     console.log('MONGODB_DATABASE:', process.env.MONGODB_DATABASE); // Додано для відлагодження

//     const user = process.env.MONGODB_USER;
//     const password = process.env.MONGODB_PASSWORD;
//     const host = process.env.MONGODB_HOST;
//     const database = process.env.MONGODB_DATABASE;

//     if (!user || !password || !host || !database) {
//         throw new Error('Missing: process.env[MONGODB_USER], process.env[MONGODB_PASSWORD], process.env[MONGODB_HOST], or process.env[MONGODB_DATABASE].');
//     }

//     const uri = `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`;
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         await client.connect();
//         console.log('Connected to MongoDB');
//         // Можна зберегти клієнт для подальшого використання
//     } catch (error) {
//         throw new Error(`Error: ${error}`);
//     }
// }
