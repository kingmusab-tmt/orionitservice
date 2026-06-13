import { MongoClient } from "mongodb";
import type { TicketDocument } from "./tickets";

const mongoUri = process.env.MONGODB_URI;
const mongoDbName =
  process.env.MONGODB_DB_NAME || process.env.MONGODB_DB || "orionitservice";

let cachedClient: MongoClient | null = null;
let cachedClientPromise: Promise<MongoClient> | null = null;

export async function getMongoClient(): Promise<MongoClient> {
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (cachedClient) {
    return cachedClient;
  }

  if (!cachedClientPromise) {
    cachedClientPromise = new MongoClient(mongoUri).connect();
  }

  cachedClient = await cachedClientPromise;
  return cachedClient;
}

export async function getTicketsCollection() {
  const client = await getMongoClient();
  return client.db(mongoDbName).collection<TicketDocument>("tickets");
}
