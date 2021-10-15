import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    likes: Number,
  },
});

const movieModel = mongoose.model("Video", videoSchema);

export default movieModel;
