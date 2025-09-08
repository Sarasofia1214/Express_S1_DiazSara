import express from "express";
import { connectDB } from "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

let db;

// Conectar a Mongo y arrancar servidor
const startServer = async () => {
  try {
    db = await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar servidor:", error);
  }
};

startServer();

// Rutas
app.get("/api/campers", async (req, res) => {
  try {
    const campers = await db.collection("campers").find().toArray();
    res.json(campers);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener campers" });
  }
});
