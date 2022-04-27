import { connect } from 'mongoose';
import config from './env.config';
console.log(config);

if (!config.MONGODB_URI) {
  throw new Error('MongoDB connection string not found...');
}

declare global {
  var mongoose: any;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnection() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = connect(config.MONGODB_URI as string, opts).then(
      (mongoose) => {
        return mongoose;
      }
    );
  }

  cached.conn = await cached.promise;
  console.info('Cached connection to MongoDB Atlas successfully!');
  return cached.conn;
}
