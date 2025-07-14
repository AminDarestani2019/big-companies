import { MongoClient } from "mongodb";

// /api/new-company
// POST /api/new-company

export default async function handler(req,res) {
    if(req.method === 'POST'){
        const data = req.body;
        const client = await MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017");
        const db = client.db('companiesdb');
        const companiesCollection = db.collection('companies');
        const result = await companiesCollection.insertOne(data);

        client.close();

        res.status(201).json({message:'Company inserted!'})
    }
}