const { MongoClient } = require("mongodb");

// MongoDB connection URI
const uri =
  "mongodb+srv://nodejs:nodejs@schooldb.ol99d.mongodb.net/?retryWrites=true&w=majority&appName=SchoolDB";
const dbName = "SchoolDB1";

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Select database and collection
    const db = client.db(dbName);
    const studentsCollection = db.collection("Students");

    // Task Q1
    const calculateAverageAgeByGrade = async () => {
      const result = await studentsCollection
        .aggregate([
          { $group: { _id: "$grade", averageAge: { $avg: "$age" } } },
        ])
        .toArray();
      console.log("Average age by grade:", result);
    };

    // Task Q2
    const findStudentsNameAndGrade = async () => {
      const students = await studentsCollection
        .find({}, { projection: { name: 1, grade: 1, _id: 0 } })
        .toArray();
      console.log("Students' names and grades:", students);
    };

    // Task Q3
    const createIndexOnAge = async () => {
      await studentsCollection.createIndex({ age: 1 });
      console.log("Index created on age field.");
    };

    // Task Q4
    const explainIndexedQueryOnAge = async () => {
      const query = await studentsCollection
        .find({ age: { $gte: 18 } })
        .explain("executionStats");
      console.log("Explain output for indexed age query:", query);
    };

    // Task Q5
    const upsertStudentGrade = async (name, age, grade, subjects) => {
      const result = await studentsCollection.updateOne(
        { name: name },
        {
          $set: { grade: grade },
          $setOnInsert: { name: name, age: age, subjects: subjects },
        },
        { upsert: true }
      );
      console.log(
        `Upsert result for ${name}:`,
        result.upsertedCount > 0
          ? "Inserted new document"
          : "Updated existing document"
      );
    };

    // Sample function calls
    await calculateAverageAgeByGrade();
    await findStudentsNameAndGrade();
    await createIndexOnAge();
    await explainIndexedQueryOnAge();
    await upsertStudentGrade("Alice", 18, "B", ["Math", "Science"]);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Run the main function
main().catch(console.error);
