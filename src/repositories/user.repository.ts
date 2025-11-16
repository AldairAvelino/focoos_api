import { prisma } from "@db/client.db";
import { IUserCreate, IUserDeactivate, IUserDelete, IUserUpdate } from "@interfaces/user.interface";

export class UserRepository {
  private prisma = prisma;

  constructor() {
    this.prisma = prisma;
  }

  // Create User
  async createUser(data: IUserCreate) {
    return await this.prisma.user.create({ data });
  }

  // Get User by ID
  async getUserById(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  // Get All Users
  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  // Get All Deactivated Users
  async getAllDeactivatedUsers() {
    return await this.prisma.user.findMany({ where: { isDeactivated: true } });
  }

  // Update User
  async updateUser(data: IUserUpdate) {
    return await this.prisma.user.update({ where:  { id: data.id }, data });
  }

  // Delete User
  async deleteUser(data: IUserDelete) {
    return await this.prisma.user.update({ where: { id: data.id }, data });
  }

  // Delete Permanently User
  async deletePermanentlyUser(data: IUserDelete) {
    return await this.prisma.user.delete({ where: { id: data.id } });
  }

  // Deactivate User
  async deactivateUser(data: IUserDeactivate) {
    return await this.prisma.user.update({
      where: { id: data.id },
      data: { isDeactivated: data.is_deactivated },
    });
  }
}
