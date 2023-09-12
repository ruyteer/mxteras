import { UserModel } from "../models/user-model";

export interface IUserRepository {
  save(data: UserModel): Promise<UserModel>;
  getAll(): Promise<UserModel[]>;
  getOne(id: string): Promise<UserModel>;
  delete(id: string): Promise<void>;
  getOneByUser(user: UserModel): Promise<UserModel>;
  getOneByEmail(email: string): Promise<UserModel>;
}
