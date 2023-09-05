import { CreateUserService } from "../../../../data/services/user/create-user";
import { UserRepository } from "../../../../infra/repositories/user-repo";
import { CreateUserController } from "../../../../presentation/controllers/user/create-user";
import { Controller } from "../../../../presentation/protocols";

export const makeCreateUserController = (): Controller => {
  const repository = new UserRepository();
  const usecase = new CreateUserService(repository);
  return new CreateUserController(usecase);
};
