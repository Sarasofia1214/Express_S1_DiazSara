import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import camperRoutes from "./routes/camperRoutes.js";
import passport from "./auth/passportConfig.js";
import authRoutes from "./routes/authRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use("/api/auth", authRoutes);


app.get("/api/protegido", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.json({ mensaje: "Accediste", usuario: req.user });
});


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





  