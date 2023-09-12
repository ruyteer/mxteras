import { DeleteUserUseCase } from "../../../../domain/usecases/user/delete-user";
import { IUserRepository } from "../../contracts/user-repository";
import { MissingParamError, MissingUserError } from "../../errors";

export class DeleteUserService implements DeleteUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async delete(id: string): Promise<void> {
    if (!id) {
      throw new MissingParamError("id");
    }

    const user = await this.userRepository.getOne(id);

    if (!user) {
      throw new MissingUserError();
    }

    await this.userRepository.delete(id);
  }
}
