import { Router } from "express";
import { UserController } from "@controllers/user.controller";

const router = Router();
const userController = new UserController();

router.post("/users", userController.createUser);
router.get("/users/:id", userController.getUserById);
router.get("/users", userController.getAllUsers);
router.get("/users/deactivated", userController.getAllDeactivatedUsers);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.delete("/users/:id/deactivate", userController.deactivateUser);

export default router;
