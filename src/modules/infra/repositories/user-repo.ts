import { prisma } from "../../../config/Prisma";
import { IUserRepository } from "../../data/contracts/user-repository";
import { UserModel } from "../../data/models/user-model";

export class UserRepository implements IUserRepository {
  async save(data: UserModel): Promise<UserModel> {
    return await prisma.user.create({ data });
  }

  async getAll(): Promise<UserModel[]> {
    return await prisma.user.findMany();
  }

  async getOne(id: string): Promise<UserModel> {
    return await prisma.user.findUnique({ where: { id: id } });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id: id } });
  }

  async getOneByUser(user: UserModel): Promise<UserModel> {
    return await prisma.user.findFirst({ where: { number: user.number } });
  }
}
