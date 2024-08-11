import mongoose from "mongoose";
export const Dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
};
