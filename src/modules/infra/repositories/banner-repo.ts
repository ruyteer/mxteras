import { prisma } from "../../../config/Prisma";
import { IBannerRepository } from "../../data/contracts/banner-repository";
import { BannerModel } from "../../data/models/banner-model";

export class BannerRepository implements IBannerRepository {
  async create(file: string): Promise<void> {
    await prisma.banner.create({ data: { image: file } });
  }

  async delete(id: string): Promise<void> {
    await prisma.banner.delete({ where: { id } });
  }

  async findAll(): Promise<BannerModel[]> {
    return await prisma.banner.findMany();
  }
}
