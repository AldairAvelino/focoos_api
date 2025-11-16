import { TaskService } from "@services/task.service"

export class TaskController {
  private taskService =TaskService;  
  constructor() {
    this.taskService = TaskService
  }
}
