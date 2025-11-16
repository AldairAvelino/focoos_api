import { UserRepository } from "@repositories/user.repository";
import { IUserCreate, IUserDeactivate, IUserDelete, IUserUpdate } from "@interfaces/user.interface";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // Create User
  async createUser(data: IUserCreate) {
    return await this.userRepository.createUser(data);
  }
  // Get User by ID
  async getUserById(id: string) {
    return await this.userRepository.getUserById(id);
  }
  // Get All Users
  async getAllUsers() {
    return await this.userRepository.getAllUsers();
  }
  // Get All Deactivated Users
  async getAllDeactivatedUsers() {
    return await this.userRepository.getAllDeactivatedUsers();
  }
  // Update User
  async updateUser(data: IUserUpdate) {
    return await this.userRepository.updateUser(data);
  }
  // Delete User
  async deleteUser(data: IUserDelete) {
    return await this.userRepository.deleteUser(data);
  }
  // Deactivate User
  async deactivateUser(id: string, data: IUserDeactivate) {
    return await this.userRepository.deactivateUser(data);
  }
}
