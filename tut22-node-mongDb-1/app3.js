const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection details
const uri =
  "mongodb+srv://nodejs:nodejs@schooldb.ol99d.mongodb.net/?retryWrites=true&w=majority&appName=SchoolDB";
const dbName = "LibraryDB";
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Select database and collection
    const db = client.db(dbName);
    const booksCollection = db.collection("Books");

    // Add Book
    app.post("/AddBook", async (req, res) => {
      try {
        const newBook = req.body;
        await booksCollection.insertOne(newBook);
        res.json({ result: "Book added successfully!" });
      } catch (err) {
        res
          .status(500)
          .json({ result: "Error adding book", error: err.message });
      }
    });

    // View Books
    app.get("/ViewBooks", async (req, res) => {
      try {
        const books = await booksCollection.find().toArray();
        res.json({ result: books });
      } catch (err) {
        res
          .status(500)
          .json({ result: "Error fetching books", error: err.message });
      }
    });

    // Borrow Book
    app.put("/BorrowBook", async (req, res) => {
      try {
        const { id, user } = req.body;
        const result = await booksCollection.findOneAndUpdate(
          { _id: new ObjectId(id), isBorrowed: { $ne: true } },
          { $set: { isBorrowed: true, borrowedBy: user } }
        );
        if (!result.value) {
          return res
            .status(400)
            .json({ result: "Book is already borrowed or does not exist." });
        }
        res.json({ result: "Book borrowed successfully!" });
      } catch (err) {
        res
          .status(500)
          .json({ result: "Error borrowing book", error: err.message });
      }
    });

    // Return Book
    app.put("/ReturnBook", async (req, res) => {
      try {
        const { id } = req.body;
        const result = await booksCollection.findOneAndUpdate(
          { _id: new ObjectId(id), isBorrowed: true },
          { $set: { isBorrowed: false, borrowedBy: null } }
        );
        if (!result.value) {
          return res.status(400).json({
            result: "Book is not currently borrowed or does not exist.",
          });
        }
        res.json({ result: "Book returned successfully!" });
      } catch (err) {
        res
          .status(500)
          .json({ result: "Error returning book", error: err.message });
      }
    });

    // Remove Book
    app.delete("/RemoveBook", async (req, res) => {
      try {
        const { id } = req.query;
        const result = await booksCollection.deleteOne({
          _id: new ObjectId(id),
        });
        if (result.deletedCount === 0) {
          return res
            .status(400)
            .json({ result: "Book does not exist or could not be removed." });
        }
        res.json({ result: "Book removed successfully!" });
      } catch (err) {
        res
          .status(500)
          .json({ result: "Error removing book", error: err.message });
      }
    });

    // Start the server
    app.listen(3000, () =>
      console.log("Library Management Server running on port 3000")
    );
  } catch (error) {
    console.error("An error occurred while connecting to MongoDB:", error);
  }
}

main().catch(console.error);
