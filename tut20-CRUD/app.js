const express = require(express);
const { MongoClient } = require(MongoClient);

const app = express();
const port = 3000;

// MongoDb connection
const uri = "";
const dbname = " ";

async function ConnectedtoDB() {
  try {
    await MongoClient.connect(uri);
    console.log("Connected to the db");
  } catch (error) {
    console.log(error);
  }
}

ConnectedtoDB();
