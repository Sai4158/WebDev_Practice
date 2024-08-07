const { default: mongoose } = require("mongoose");

// create a scheam or req data to enter to store
const LaptopSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  laptopmodel: { type: String, required: true, unique: true },
  laptopprice: { type: String, required: true },
});

// return type
const LaptopModel =
  mongoose.models.laptopmodel || mongoose.model("laptop", LaptopSchema);

//   now export it
export default laptopmodel;
