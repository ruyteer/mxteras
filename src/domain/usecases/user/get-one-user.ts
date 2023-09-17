import { User } from "../../entities/user";

export interface GetOneUserUseCase {
  findOne(id: string): Promise<User>;
}
