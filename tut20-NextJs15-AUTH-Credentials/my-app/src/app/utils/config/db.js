const { default: mongoose } = require("mongoose");

const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Db connected!");
  } catch (error) {
    console.log(error);
  }
};

export default DBconnection;
