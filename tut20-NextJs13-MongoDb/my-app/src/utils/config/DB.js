import mongoose from "mongoose";

export const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB has been connected");
  } catch (error) {
    console.log(error);
  }
};
