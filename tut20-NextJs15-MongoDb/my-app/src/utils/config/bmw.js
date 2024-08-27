import mongoose from "mongoose";

export const DbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL111);
    console.log("DB HAS BEEEEN CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
