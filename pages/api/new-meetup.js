import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect("mongodb+srv://asem:qwertyuiop@meetups.28r7lfl.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    
    client.close();

    res.status(201).json({ message: "the meetup have been inserted" });

  }

}

export default handler;