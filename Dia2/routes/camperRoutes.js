import { Router } from "express";
import {
  getAllCampers,
  getCamperById,
  createCamper,
  updateCamper,
  deleteCamper,
} from "../controllers/camperController.js";

const router = Router();

console.log("📌 camperView.js cargado correctamente");

router.get("/", getAllCampers);
router.post("/", createCamper);
router.get("/:id", getCamperById);
router.put("/:id", updateCamper);
router.delete("/:id", deleteCamper);


export default router;
