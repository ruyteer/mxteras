import { User } from "../../../../domain/entities/user";
import { GetUsersUseCase } from "../../../../domain/usecases/user/get-all-users";
import { IUserRepository } from "../../contracts/user-repository";
import { MissingUserError } from "../../errors";

export class GetAllUsersService implements GetUsersUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async getAll(): Promise<User[]> {
    const users = await this.userRepository.getAll();

    if (!users) {
      throw new MissingUserError();
    }

    return users;
  }
}
