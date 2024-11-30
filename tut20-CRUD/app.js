const { connect } = require("mongoose");
const { AzureOpenAI } = require("openai");

const express = require(express);
const { MongoClient } = require(MongoClient);

const app = express();
const port = 3000;
let db;

// MongoDb connection
const uri =
  "mongodb+srv://learn123:learn123@cluster0.ern8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function ConnectedtoDB() {
  try {
    await MongoClient.connect(uri);
    console.log("Connected to the db");
  } catch (error) {
    console.log(error);
  }
}

app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await Db.collection("users").insertone(user);
    res.send({ message: "User added", userId: result.insertedId });
  } catch (error) {
    console.log(error);
  }
});

// Start the server

app.listen(port, async () => {
  await ConnectedtoDB();
  console.log("Db has been connected");
});
