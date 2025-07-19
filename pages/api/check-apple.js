import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("myAppDB");
  const companiesCollection = db.collection("Collection1");

  const company = await companiesCollection.findOne({ categoryid: "apple" });

  client.close();

  res.status(200).json(company || { error: "Not found" });
}