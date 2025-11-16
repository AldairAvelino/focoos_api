import { TaskRepository } from "@repositories/task.repositoty";

export class TaskService {
  private taskRepository = TaskRepository
  constructor() {
    this.taskRepository = TaskRepository
  }
}
