import express from "express";
import { getCancion } from "../controllers/cancion.controller.js";

const router = express.Router();

router.get("/cancion", getCancion);

export default router;
