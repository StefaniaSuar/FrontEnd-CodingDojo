
import Playlist from "../models/Playlist.js";


export const listPlaylists = async (_req, res) => {
    const pls = await Playlist.find({})
    .populate("songs")
    .sort({ createdAt: -1 });
    res.json(pls);
};

export const getPlaylist = async (req, res) => {
    const pl = await Playlist.findById(req.params.id).populate("songs");
    if (!pl) return res.status(404).json({ message: "Playlist not found" });
    res.json(pl);
};


export const createPlaylist = async (req, res) => {
    try {
        const created = await Playlist.create(req.body);
        res.status(201).json(created);
    } catch (err) { return handleMongooseError(res, err); }
};


export const updatePlaylist = async (req, res) => {
    try {
        const updated = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
        new: true, runValidators: true
        }).populate("songs");
        if (!updated) return res.status(404).json({ message: "Playlist not found" });
        res.json(updated);
    } catch (err) { return handleMongooseError(res, err); }
};


export const addSongToPlaylist = async (req, res) => {
    const { playlistId, songId } = req.params;
    const pl = await Playlist.findById(playlistId);
    if (!pl) return res.status(404).json({ message: "Playlist not found" });

    if (!pl.songs.find((id) => id.toString() === songId)) {
        pl.songs.push(songId);
        await pl.save();
    }
    const populated = await pl.populate("songs");
    res.json(populated);
};


export const removeSongFromPlaylist = async (req, res) => {
    const { playlistId, songId } = req.params;
    const pl = await Playlist.findById(playlistId);
    if (!pl) return res.status(404).json({ message: "Playlist not found" });

    pl.songs = pl.songs.filter((id) => id.toString() !== songId);
    await pl.save();
    const populated = await pl.populate("songs");
    res.json(populated);
};


export const deletePlaylist = async (req, res) => {
    try {
        const del = await Playlist.findByIdAndDelete(req.params.id);
        if (!del) return res.status(404).json({ message: "Playlist not found" });
        return res.status(204).end();
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
};
