import { prisma } from "../../../config/Prisma";
import { IProductRepository } from "../../data/contracts/product-repository";
import { ProductModel } from "../../data/models/product-model";
import { ProductView } from "../../data/views/product";

export class ProductRepository implements IProductRepository {
  async create(product: ProductModel): Promise<void> {
    await prisma.product.create({
      data: {
        category: product.category,
        description: product.description,
        name: product.name,
        price: parseFloat(product.price),
        quantity: product.quantity,
        images: product.images,
      },
    });
  }

  async getAll(): Promise<ProductView[]> {
    return await prisma.product.findMany();
  }

  async getOne(id: string): Promise<ProductView> {
    return await prisma.product.findUnique({ where: { id } });
  }

  async update(data: ProductView, id: string): Promise<void> {
    await prisma.product.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
}
