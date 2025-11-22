import { Router } from "express";
import trackController from "../controllers/songs.controller.js";

const trackRoutes = Router();

trackRoutes.get("/", trackController.fetchAll);
trackRoutes.post("/", trackController.addOne);
trackRoutes.get("/:id", trackController.fetchOne);
trackRoutes.delete("/:id", trackController.removeOne);
trackRoutes.put("/:id", trackController.modifyOne);

export default trackRoutes;
