const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // This loads the environment variables from the .env file

const dbConnection = async () => {
  try {
    const dbUri = process.env.MONGODB;
    if (!dbUri) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }

    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db has been connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default dbConnection;
