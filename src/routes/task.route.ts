// Responsible for tasks routing only
import { Router } from "express";
import { TaskController } from "@controllers/task.controller";

const router = Router();
const taskController = new TaskController();

// router.get("/tasks", taskController.getAllTasks);
// router.get("/tasks/:id", taskController.getTaskById);
// router.post("/tasks", taskController.createTask);
// router.put("/tasks/:id", taskController.updateTask);
// router.delete("/tasks/:id", taskController.deleteTask);
// router.delete("/tasks/:id/restore", taskController.restoreTask);
// router.delete("/tasks/:id/permanently", taskController.deletePermanentlyTask);

export default router;
