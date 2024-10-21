import mongoose from "mongoose";

export const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_RECAP);
    console.log("DB has been connected");
  } catch (error) {
    console.log(error);
  }
};
