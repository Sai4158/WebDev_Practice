// schema

const { default: mongoose, model } = require("mongoose");
const { required } = require("nodemon/lib/config");

const usernameSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], required: true },
});

// if user is in ther model then create the user
// instead of creating a new one everytime it will use the same one
const usermodel = mongoose.model.user || mongoose.model("user", usernameSchema);
