import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL );

const clientPromise = client.connect();
console.log("MongoDb Connected..✅");
    
export default clientPromise;