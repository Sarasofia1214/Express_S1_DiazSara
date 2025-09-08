import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import camperRoutes from "./views/camperView.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/campers", camperRoutes);

// Conectar a Mongo y levantar servidor
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ No se pudo conectar a MongoDB", err);
  });
