const { default: mongoose } = require("mongoose");
const { Type } = require("react-toastify/dist/utils");

const dogSchmea = new mongoose.Schema({
  DogName: { type: String, require: true, unique: true },
  DogBreed: { type: String, require: true },
  DogAgee: { type: Number, require: true },
});

const DogModel = mongoose.model.dogSchmea || mongoose.model("dog", dogSchmea);

export default DogModel;
