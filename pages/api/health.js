import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    await client.close();

    res.status(200).json({ status: "ok", message: "Connected to Cosmos DB (MongoDB API)" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
