import { GetAllUsersService } from "../../../../data/services/user/get-all-users";
import { UserRepository } from "../../../../infra/repositories/user-repo";
import { GetAllUserController } from "../../../../presentation/controllers/user/get-all-users";
import { Controller } from "../../../../presentation/protocols";

export const makeGetUserController = (): Controller => {
  const repository = new UserRepository();
  const usecase = new GetAllUsersService(repository);
  return new GetAllUserController(usecase);
};
