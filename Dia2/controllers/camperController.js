import Camper from "../models/camperModel.js";

export const getAllCampers = async (req, res) => {
  try {
    const campers = await Camper.find();
    res.json(campers);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los campers" });
  }
};
