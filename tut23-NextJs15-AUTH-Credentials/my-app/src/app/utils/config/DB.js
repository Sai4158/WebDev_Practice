// This is db conection

const { default: mongoose } = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Db has been connected succefully");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
