/* eslint-disable import/no-anonymous-default-export */
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI || null,
  DB_NAME: process.env.DB_NAME,
};
