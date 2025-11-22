
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import songRoutes from "./routes/song.routes.js";
import playlistRoutes from "./routes/playlist.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (_req, res) => res.json({ ok: true, msg: "API Music v1" }));
app.use("/api/songs", songRoutes);
app.use("/api/playlists", playlistRoutes);


const PORT = Number(process.env.PORT) || 8000;
const URI  = process.env.MONGOBD; 

if (!URI) {
    console.error(" Falta la variable MONGOBD en server/.env");
    process.exit(1);
}

connectDB(URI).then(() => {
    app.listen(PORT, () => {
    console.log(` API on http://localhost:${PORT}`);
    });
});
