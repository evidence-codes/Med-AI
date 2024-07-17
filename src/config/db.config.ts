import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
let db: any;

export default async function connectToDb() {
  if (db) return db; // Return the existing database instance if it exists
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db();
    return db;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
