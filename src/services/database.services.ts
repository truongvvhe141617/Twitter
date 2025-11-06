import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let db: Db | null = null;

export const connectMongoNative = async (): Promise<Db> => {
  try {
    const client = new MongoClient(process.env.MONGO_URI as string, {
      maxPoolSize: Number(process.env.MONGO_MAX_POOL_SIZE) || 20,
      minPoolSize: Number(process.env.MONGO_MIN_POOL_SIZE) || 5,
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
    });

    await client.connect();

    db = client.db(process.env.MONGO_DB_NAME);
    console.log(`✅ Connected to MongoDB Atlas Database: ${process.env.MONGO_DB_NAME}`);
    return db;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};
