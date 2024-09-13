const { default: mongoose } = require("mongoose");

const monitorSchema = new mongoose.Schema({
  monitor: { type: String },
});

const monitorModel =
  mongoose.models.monitor || mongoose.model("monitors", monitorSchema);

export default monitorModel;
