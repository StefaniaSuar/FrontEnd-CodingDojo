import { generarCancion } from "../utils/generators.js";

export const getCancion = (req, res) => {
  const cancion = generarCancion();
  res.json(cancion);
};
