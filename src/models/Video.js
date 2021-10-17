import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 100 },
  description: { type: String, trim: true, maxlength: 1000 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtag: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, required: true, default: 0 },
    likes: { type: Number, required: true, default: 0 },
  },
});

videoSchema.pre("save", async function () {
  this.hashtag = this.hashtag[0]
    .split(",")
    .map((word) => (!word.startsWith("#") ? `#${word}` : word));
});

const movieModel = mongoose.model("Video", videoSchema);

export default movieModel;
