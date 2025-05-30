const { Schema, default: mongoose } = require("mongoose");
const { userAgent } = require("next/server");
const { required } = require("nodemon/lib/config");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);
