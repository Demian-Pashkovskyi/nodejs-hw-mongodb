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

    console.log('MONGODB_USER:', user);
    console.log('MONGODB_PASSWORD:', pwd);
    console.log('MONGODB_URL:', url);
    console.log('MONGODB_DB:', db);

    const uri = `mongodb+srv://${(user)}:${(pwd)}@${url}/${db}?retryWrites=true&w=majority`;

    await mongoose.connect(uri ,);

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw error;
  }
};
