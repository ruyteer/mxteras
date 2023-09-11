import { UserModel } from "../models/user-model";

export interface IUserRepository {
  save(data: UserModel): Promise<UserModel>;
  getAll(): Promise<UserModel[]>;
}
