import { MongoClient } from "mongodb";

// /api/new-company
// POST /api/new-company

export default async function handler(req,res) {
    if(req.method === 'POST'){
        const data = req.body;
          
        if (!data.categoryid) {
            return res.status(400).json({ message: "categoryid is required" });
        }

        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db('myAppDB');
        const companiesCollection = db.collection('Collection1');
        const result = await companiesCollection.insertOne(data);

        client.close();

        res.status(201).json({message:'Company inserted!'})
    }
}