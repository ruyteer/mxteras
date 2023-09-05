import { prisma } from "../../../config/Prisma";
import { IUserRepository } from "../../data/contracts/user-repository";
import { UserModel } from "../../data/models/user-model";

export class UserRepository implements IUserRepository {
  async save(data: UserModel): Promise<void> {
    await prisma.user.create({ data: data });
  }

  async getAll(): Promise<UserModel[]> {
    return await prisma.user.findMany();
  }
}
