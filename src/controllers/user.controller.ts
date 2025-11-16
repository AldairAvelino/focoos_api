import { UserService } from "@services/user.service";
import { IUserCreate, IUserDeactivate, IUserDelete, IUserUpdate } from "@interfaces/user.interface";
import { Request, Response } from "express";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
    
    this.createUser = this.createUser.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getAllDeactivatedUsers = this.getAllDeactivatedUsers.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.deactivateUser = this.deactivateUser.bind(this);
  }

  // Create User
  async createUser(req: Request, res: Response) {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  }

  // Get User by ID
  async getUserById(req: Request<{ id: string }>, res: Response) {
    try {
      const user = await this.userService.getUserById(req.params.id);
      res.status(200).json({ message: "User retrieved successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving user", error });
    }
  }

  // Get All Users
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json({ message: "Users retrieved successfully", users });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving users", error });
    }
  }

  // Get All Deactivated Users
  async getAllDeactivatedUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.getAllDeactivatedUsers();
      res.status(200).json({ message: "Deactivated users retrieved successfully", users });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving deactivated users", error });
    }
  }

  // Update User
  async updateUser(req: Request, res: Response) {
    try {
      const user = await this.userService.updateUser(req.body);
      res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
  }

  // Delete User
  async deleteUser(req: Request, res: Response) {
    try {
      const user = await this.userService.deleteUser(req.body);
      res.status(200).json({ message: "User deleted successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
  }

  // Deactivate User
  async deactivateUser(req: Request<{ id: string }>, res: Response) {
    try {
      const user = await this.userService.deactivateUser(req.params.id, req.body);
      res.status(200).json({ message: "User deactivated successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error deactivating user", error });
    }
  }
}
