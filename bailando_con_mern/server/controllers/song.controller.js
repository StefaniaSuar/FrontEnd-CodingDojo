
import Song from "../models/Song.js";


export const listSongs = async (_req, res) => {
    const songs = await Song.find({}).sort({ createdAt: -1 }); 
    res.json(songs);
};


export const getSong = async (req, res) => {
    const s = await Song.findById(req.params.id);
    if (!s) return res.status(404).json({ message: "Song not found" });
    res.json(s);
};


export const createSong = async (req, res) => {
    try {
        const created = await Song.create(req.body);
        res.status(201).json(created);
    } catch (err) { return handleMongooseError(res, err); }
};



export const updateSong = async (req, res) => {
    try {
        const s = await Song.findByIdAndUpdate(req.params.id, req.body, {
        new: true, runValidators: true
        });
        if (!s) return res.status(404).json({ message: "Song not found" });
        res.json(s);
    } catch (err) { return handleMongooseError(res, err); }
};

export const deleteSong = async (req, res) => {
    try {
        const s = await Song.findByIdAndDelete(req.params.id);
        if (!s) return res.status(404).json({ message: "Song not found" });
        return res.status(204).end();
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
};
