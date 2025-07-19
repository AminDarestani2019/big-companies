import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const db = client.db("myAppDB"); // همان نام دیتابیسی که ساخته‌اید
    const collections = await db.listCollections().toArray();

    await client.close();
    res.status(200).json({ success: true, collections });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}