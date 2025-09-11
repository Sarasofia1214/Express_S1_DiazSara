import { Router } from "express";
import { UserController } from "../crotrollers/userController";

export function buildUserRoute(userController){
    const router = Router();
    router.get("/",UserController.list);
    router.get("/:id",UserControllers.get);
    router.post("/",UserControllers.create);
    router.put("/:id",UserControllers.update);
    router.delete("/:id",UserControllers.delete);
}