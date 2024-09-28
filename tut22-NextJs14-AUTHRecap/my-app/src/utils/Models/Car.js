// This is for the schema

const { default: mongoose } = require("mongoose");

const CarSchmea = new mongoose.Schema({
  CarModel: { Type: String, required: true },
  CarColour: { Type: String, required: true },
});

export default mongoose.models.car || mongoose.model("car", CarSchmea);
