// import this first
import mongoose from "mongoose";

// then write asnyc funtion
export const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL11);
    console.log("DB has been connected");
  } catch (error) {
    console.log(error);
  }
};
