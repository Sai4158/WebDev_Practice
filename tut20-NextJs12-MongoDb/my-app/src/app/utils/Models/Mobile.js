const mongoose = require("mongoose");

const MobileSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  model: { type: String, required: true, unique: true },
  price: { type: Number, required: true }, 
});


const MobileModel =
  mongoose.models.mobile || mongoose.model("mobile", MobileSchema);

export default MobileModel;
