import { User } from "../../entities/user";

export interface GetUsersUseCase {
  getAll(): Promise<User[]>;
}
