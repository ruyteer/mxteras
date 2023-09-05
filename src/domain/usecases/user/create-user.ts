import { User } from "../../entities/user";

export interface CreateUserUseCase {
  create(user: User): Promise<void>;
}
