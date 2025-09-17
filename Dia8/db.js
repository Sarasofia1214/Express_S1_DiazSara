
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

export async function connectDB() {
  try {
    if (!db) {
      await client.connect();
      db = client.db(process.env.DB_NAME);
      console.log("Conectado a MongoDB Atlas:", process.env.DB_NAME);
    }
    return db;
  } catch (error) {
    console.error(" Error de conexión a MongoDB:", error);
    throw error;
  }
}

export function getDB() {
  if (!db) throw new Error(" La base de datos no está conectada aún");
  return db;
}
