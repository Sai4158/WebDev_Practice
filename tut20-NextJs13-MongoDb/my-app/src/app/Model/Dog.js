const { default: mongoose } = require("mongoose");

const dogSchmea = new mongoose.Schema({
  DogName: { type: String, require: true, unique: true },
  DogBreed: { type: String, require: true },
  DogAge: { type: Number, require: true },
});

const DogModel = mongoose.model.dogSchmea || mongoose.model("dog", dogSchmea);

export default DogModel;
