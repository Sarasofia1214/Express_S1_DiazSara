import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import camperRoutes from "./routes/camperRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use("/api/campers", camperRoutes);
console.log(" Rutas de campers montadas en /api/campers");

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Conexión exitosa http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("No se pudo conectar a MongoDB", err);
  });





  