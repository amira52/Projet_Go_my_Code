const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const PostSchema = new Schema({
  Description: { type: String, required: true },
});

module.exports = Post = model("post", PostSchema);
