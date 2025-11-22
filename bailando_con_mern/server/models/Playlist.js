import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "Playlist name is required"], trim: true, minlength: [2, "Name too short"] },
        description: { type: String, trim: true },
        songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }]
    },{ timestamps: true });

export default mongoose.model("Playlist", playlistSchema);
