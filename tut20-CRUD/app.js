const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;
let db;

// MongoDB Connection URI
const uri =
  "mongodb+srv://learn123:learn123@cluster0.ern8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection Function
async function ConnectedtoDB() {
  try {
    const client = await MongoClient.connect(uri);
    db = client.db("Cluster0");
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

// POST Endpoint: Add a User
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await db.collection("users").insertOne(user);
    res.send({ message: "User added", userId: result.insertedId });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send({ error: "Failed to add user" });
  }
});

// Start the Server
app.listen(port, async () => {
  await ConnectedtoDB();
  console.log(`Server is running at http://localhost:${port}`);
});
