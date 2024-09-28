// This for the db connection

import mongoose from "mongoose";

export const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Db have been connected");
  } catch (error) {
    console.log(error);
  }
};
