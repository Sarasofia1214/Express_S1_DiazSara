import "dotenv/config";
import express from "express";

// Importación BBDD
import { Database } from "./config/db.js";

// Importación MVC
import { UserModel } from "./models/userModel.js";
import { UserRepository } from "./repositories/userRepository.js";
import { UserService } from "./services/userService.js";
import { UserController } from "./controllers/userController.js";
import { buildUserRouter } from "./routes/userRoutes.js";

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.db = new Database(process.env.MONGODB_URI);
  }

  async init() {
    // Conectar base de datos
    await this.db.connect();

    // Middleware básico
    this.app.use(express.json());

    // Ruta raíz de prueba
    this.app.get("/", (req, res) => {
      res.json({
        ok: true,
        service: "SERVICIO CRUD DE USUARIO",
      });
    });

    // Inyección de dependencias para User
    const userRepo = new UserRepository(new UserModel());
    const userSrv = new UserService(userRepo);
    const userCtrl = new UserController(userSrv);

    // Rutas
    this.app.use("/api/users", buildUserRouter(userCtrl));

    // Arranque del servidor
    this.app.listen(this.port, () => {
      console.log("Server running on :" + this.port);
    });
  }
}

const app = new App();
app.init();
