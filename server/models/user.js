import mongoose from "mongoose";

const collectionSchema = new Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

module.exports = mongoose.model("Collection", collectionSchema);
