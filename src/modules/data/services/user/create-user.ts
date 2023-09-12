import { CreateUserUseCase } from "../../../../domain/usecases/user/create-user";
import { IUserRepository } from "../../contracts/user-repository";
import { MissingParamError } from "../../errors";
import { UserModel } from "../../models/user-model";

export class CreateUserService implements CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async create(user: UserModel): Promise<UserModel> {
    const requiredFields = ["name", "nickname", "email", "number"];

    for (const field of requiredFields) {
      if (!user[field]) {
        throw new MissingParamError(field);
      }
    }

    const userNumberExists = await this.userRepository.getOneByUser(user);
    const userEmailExists = await this.userRepository.getOneByEmail(user.email);

    if (!userNumberExists || !userEmailExists) {
      return await this.userRepository.save(user);
    } else if (userNumberExists) {
      return userNumberExists;
    } else if (userEmailExists) {
      return userEmailExists;
    }
  }
}
