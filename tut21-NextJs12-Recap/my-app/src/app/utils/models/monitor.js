const { default: mongoose } = require("mongoose");

const monitorSchmea = new mongoose.Schema({
  Monitor: { type: String },
});

const monitorModel =
  mongoose.models.montior || mongoose.model("monitor", monitorSchmea);

export default monitorModel;
