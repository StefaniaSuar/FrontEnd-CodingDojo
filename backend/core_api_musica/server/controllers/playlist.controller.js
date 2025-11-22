import { generarPlaylist } from "../utils/generators.js";

export const getPlaylist = (req, res) => {
  const playlist = generarPlaylist();
  res.json(playlist);
};
