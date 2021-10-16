import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtag: [{ type: String }],
  meta: {
    views: { type: Number, required: true, default: 0 },
    likes: { type: Number, required: true, default: 0 },
  },
});

const movieModel = mongoose.model("Video", videoSchema);

export default movieModel;
