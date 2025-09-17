import { Router } from "express";
import jwt from "jsonwebtoken";
const router = Router();

router.post("/login", (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Content-Type:", req.get("content-type"));
  console.log("Body:", req.body);

  const { username, password } = req.body || {}; 

  if (!username || !password) {
    return res.status(400).json({ error: "username and password required" });
  }

  // ejemplo simple de auth
  if (username === "admin" && password === "1234") {
    const payload = { username, role: "coordinator" };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return res.json({ token });
  }

  return res.status(401).json({ message: "Credenciales inválidas" });
});

export default router;
