export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  slug: string;
  is_deactivated: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserCreate {
  email: string;
  password: string;
  name: string;
  slug: string;
}

export interface IUserUpdate {
  id: string;
  email?: string;
  password?: string;
  name?: string;
  slug?: string;
}

export interface IUserDelete {
  id: string;
  is_deleted: boolean;
}

export interface IUserDeactivate {
  id: string;
  is_deactivated: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}
