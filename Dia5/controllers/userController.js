export class UserController {
  constructor(userService) {
    this.service = userService;
  } 
//OJOOOOOOOOO - Ya estamos manejando el body/parametros/etc... del request
  create = async (req, res) => {
    try {
      const data = req.body; 
      const newUser = await this.service.createUser(data);
      res.status(201).json(newUser);
    } catch (error) {
      console.log("Error en create:", error);
      res.status(500).json({ error: "Error al crear usuario" });
    }
  };

  list = async (req, res) => {
    try {
      const users = await this.service.getAllUsers();
      res.json(users);
    } catch (error) {
      console.log("Error en list:", error);
      res.status(500).json({ error: "Error al obtener usuarios" });
    }
  };

//Obtener por ID desde el EndPoint
  get = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.service.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json(user);
    } catch (error) {
       console.log("Error en get:", error);
      res.status(500).json({ error: "Error al obtener usuario" });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updated = await this.service.updateUser(id, data);
      if (!updated) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json(updated);
    } catch (error) {
      console.log("Error en update:", error);
      res.status(500).json({ error: "Error al actualizar usuario" });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteuser = await this.service.deleteUser(id);
      if (!deleteuser) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json({ message: "Usuario eliminado" });
    } catch (error) {
    console.log("Error en delete:", error);
      res.status(500).json({ error: "Error al eliminar usuario" });
    }
  };
}
