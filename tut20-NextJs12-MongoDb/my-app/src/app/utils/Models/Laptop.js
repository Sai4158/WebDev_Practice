import mongoose from "mongoose";

// Define the Laptop schema
const LaptopSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  laptopmodel: { type: String, required: true, unique: true },
  laptopprice: { type: String, required: true },
});

// Create or retrieve the Laptop model
const LaptopModel =
  mongoose.models.laptop || mongoose.model("laptop", LaptopSchema);
export default LaptopModel;
