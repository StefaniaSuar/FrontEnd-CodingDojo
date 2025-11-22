import express from "express";
import cancionRoutes from "./Routes/cancion.route.js";
import playlistRoutes from "./Routes/playlist.routes.js";

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/api", cancionRoutes);
app.use("/api", playlistRoutes);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
