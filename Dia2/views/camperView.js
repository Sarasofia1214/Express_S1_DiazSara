import express from "express";
import { getAllCampers } from "../controllers/camperController.js";

const router = express.Router();

router.get("/", getAllCampers);

export default router;
