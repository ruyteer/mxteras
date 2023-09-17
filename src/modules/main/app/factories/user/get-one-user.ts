import { GetOneUserService } from "../../../../data/services/user/get-one-user";
import { UserRepository } from "../../../../infra/repositories/user-repo";
import { GetOneUserController } from "../../../../presentation/controllers/user/get-one-user";
import { Controller } from "../../../../presentation/protocols";

export const makeGetOneUser = (): Controller => {
  const repository = new UserRepository();
  const usecase = new GetOneUserService(repository);
  return new GetOneUserController(usecase);
};
