import { Router } from "express";
import { listSongs, getSong, createSong, updateSong, deleteSong } from "../controllers/song.controller.js";


const router = Router();

router.get("/",listSongs);
router.get("/:id", getSong);
router.post("/", createSong);
router.put("/:id", updateSong);
router.delete ("/:id", deleteSong);

export default router;