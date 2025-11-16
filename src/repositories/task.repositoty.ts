import { prisma } from "@db/client.db";

export class TaskRepository {
  private prisma = prisma;
  constructor() {
    this.prisma = prisma;
  }

  // Create Task
  async createTask(title: string, description: string, user_id: string) {}

  // Get Task by ID
  async getTaskById(id: string) {}

  // Get All Tasks
  async getAllTasks() {}

  // Get All Completed Tasks
  async getAllCompletedTasks() {}

  // Get All Deleted Tasks
  async getAllDeletedTasks() {}

  // Get All Uncompleted Tasks
  async getAllUncompletedTasks() {}

  // Get All Task by User ID
  async getTaskByUserId(user_id: string) {}

  // Get All Completed Task by User ID
  async getCompletedTaskByUserId(user_id: string) {}

  // Get All Deleted Task by User ID
  async getDeletedTaskByUserId(user_id: string) {}

  // Get All Uncompleted Task by User ID
  async getUncompletedTaskByUserId(user_id: string) {}

  // Update Task
  async updateTask(data: any) {}

  // Delete Task
  async deleteTask(id: string) {}

  // Restore Task
  async restoreTask(id: string) {}

  // Delete Permanently Task
  async deletePermanentlyTask(id: string) {}
}
