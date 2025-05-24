import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URL;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGO_URL) {
  throw new Error("Please add your MONGO_URL to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Dev mode: reuse existing connection in hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Prod mode: create fresh connection
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
