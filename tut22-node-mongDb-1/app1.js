const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://nodejs:nodejs@schooldb.ol99d.mongodb.net/?retryWrites=true&w=majority&appName=SchoolDB"
);

async function main() {
  await client.connect();
  const db = client.db("Cars").collection("BWM");

  await db.insertOne({ name: "bmw m3", price: 50000 });
  console.log("done");

  await client.close();
}

main().catch(console.error);
