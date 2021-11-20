const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: Number,
  role: { type: String, default: "user", enum: ["user", "admin"] },
});

module.exports = User = model("user", userSchema);
