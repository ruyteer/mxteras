import { prisma } from "../../../config/Prisma";
import { IProductRepository } from "../../data/contracts/product-repository";
import { ProductModel } from "../../data/models/product-model";

export class ProductRepository implements IProductRepository {
  async create(product: ProductModel): Promise<void> {
    await prisma.product.create({ data: product });
  }

  async getAll(): Promise<ProductModel[]> {
    return await prisma.product.findMany();
  }

  async getOne(id: string): Promise<ProductModel> {
    return await prisma.product.findUnique({ where: { id } });
  }

  async update(product: ProductModel, id: string): Promise<void> {
    await prisma.product.update({ where: { id }, data: product });
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
}
