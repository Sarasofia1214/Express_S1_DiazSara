import { connectDB } from "./db.js";

const test = async () => {
  const db = await connectDB();
  const campers = db.collection("campers");

  // Insertar un camper de prueba (si no existe)
  await campers.updateOne(
    { ID: "123" }, // criterio de búsqueda
    {
      $set: {
        ID: "123",
        nombre: "Sara Díaz",
        email: "sara@example.com",
        estado: "Inscrito",
      },
    },
    { upsert: true } // inserta si no existe
  );

  // Listar todos los campers
  const allCampers = await campers.find().toArray();
  console.log("Campers en la base:", allCampers);
};

test();
