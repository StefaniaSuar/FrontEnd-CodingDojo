import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
    {
        title:  { type: String, required: [true, "Title is required"], trim: true, minlength: [2, "Title too short"] },
        artist: { type: String, required: [true, "Artist is required"], trim: true, minlength: [2, "Artist too short"] },
        genre:  { type: String, trim: true },
        album:  { type: String, trim: true },
        durationSec: { type: Number, min: [0, "Duration must be positive"] }
    },{ timestamps: true });

export default mongoose.model("Song", songSchema);
