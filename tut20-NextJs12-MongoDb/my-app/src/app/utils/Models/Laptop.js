// make sure to import this
import mongoose from "mongoose";

// Define the Laptop schema
// unique - wont reapt it again
const LaptopSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  laptopmodel: { type: String, required: true, unique: true },
  laptopprice: { type: String, required: true },
});

const LaptopModel =
  // JsoN db will be under name laptop
  // but if "laptop" isnt there then it will create name using LaptopSchema
  mongoose.models.laptop || mongoose.model("laptop", LaptopSchema);
export default LaptopModel;
``;
