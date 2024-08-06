import mongoose, { Mongoose } from "mongoose";

export const DbCONNECT = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB has been connected");
  } catch (error) {
    console.log(error);
  }
};

export const dbconnetct1 = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

export const condb = async () => {
  await dbconnetct1();
};

condb();
