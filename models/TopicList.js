const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const TopicListSchema = new Schema({
  ImgURL: { type: String },
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Categories: {
    type: String,
    enum: ["tutorial", "installation", "course"],
  },
});

module.exports = Topic = model("topic", TopicListSchema);
