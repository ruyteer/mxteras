import { DeleteUserService } from "../../../../data/services/user/delete-user";
import { UserRepository } from "../../../../infra/repositories/user-repo";
import { DeleteUserController } from "../../../../presentation/controllers/user/delete-user";
import { Controller } from "../../../../presentation/protocols";

export const makeDeleteUser = (): Controller => {
  const repository = new UserRepository();
  const usecase = new DeleteUserService(repository);
  return new DeleteUserController(usecase);
};
