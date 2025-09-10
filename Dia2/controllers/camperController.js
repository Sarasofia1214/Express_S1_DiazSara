import { ObjectId } from "mongodb";
import { getDB } from "../db.js";  // función que devuelve la conexión

// GET /campers
export const getAllCampers = async (req, res) => {
  try {
    const db = getDB();
    const campers = await db.collection("campers").find().toArray();
    res.json(campers);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener campers" });
  }
};

// GET /campers/:id
export const getCamperById = async (req, res) => {
  try {
    const db = getDB();
    const camper = await db
      .collection("campers")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!camper) {
      return res.status(404).json({ message: "Camper no encontrado" });
    }
    res.json(camper);
  } catch (err) {
    res.status(500).json({ error: "Error al buscar camper" });
  }
};

// POST /campers
export const createCamper = async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("campers").insertOne(req.body);
    res.status(201).json({ _id: result.insertedId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: "Error al crear camper" });
  }
};


// PUT /campers/:id
export const updateCamper = async (req, res) => {
  try {
    const db = getDB();
    const result = await db
      .collection("campers")
      .updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
      );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Camper no encontrado" });
    }
    res.json({ message: "Camper actualizado" });
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar camper" });
  }
};

// DELETE /campers/:id
export const deleteCamper = async (req, res) => {
  try {
    const db = getDB();
    const result = await db
      .collection("campers")
      .deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Camper no encontrado" });
    }
    res.json({ message: "Camper eliminado" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar camper" });
  }
};
