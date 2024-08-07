const mongoose = require("mongoose");

const MobileSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  model: { type: String, required: true, unique: true },
  price: { type: Number, required: true },  // Ensure this is Number if it should be
});


const MobileModel =
  mongoose.models.mobile || mongoose.model("mobile", MobileSchema);

export default MobileModel;
