import { User } from "../../../../domain/entities/user";
import { GetOneUserUseCase } from "../../../../domain/usecases/user/get-one-user";
import { IUserRepository } from "../../contracts/user-repository";
import { MissingParamError, MissingUserError } from "../../errors";

export class GetOneUserService implements GetOneUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async findOne(id: string): Promise<User> {
    if (!id) {
      throw new MissingParamError("id");
    }

    const user = await this.userRepository.getOne(id);

    if (!user) {
      throw new MissingUserError();
    }

    return user;
  }
}
