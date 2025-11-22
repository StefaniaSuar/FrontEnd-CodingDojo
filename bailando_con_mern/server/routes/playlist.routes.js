import { Router } from "express";
import {
    listPlaylists,
    getPlaylist,
    createPlaylist,
    updatePlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
    deletePlaylist
} from "../controllers/playlist.controller.js";

const router = Router();

router.get("/", listPlaylists);
router.get("/:id", getPlaylist);
router.post("/", createPlaylist);
router.put("/:id", updatePlaylist);


router.post("/:playlistId/songs/:songId", addSongToPlaylist);


router.delete("/:playlistId/songs/:songId", removeSongFromPlaylist);

router.delete("/:id", deletePlaylist);

export default router;
