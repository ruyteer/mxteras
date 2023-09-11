import { prisma } from "../../../config/Prisma";
import { IOrderRepository } from "../../data/contracts/order-repository";
import { OrderModel } from "../../data/models/order-model";

export class OrderRepository implements IOrderRepository {
  async findMany(): Promise<OrderModel[]> {
    return await prisma.order.findMany();
  }

  async findUnique(userId: string): Promise<OrderModel> {
    return await prisma.order.findFirstOrThrow({ where: { userId: userId } });
  }

  async save(order: OrderModel): Promise<void> {
    await prisma.order.create({
      data: order,
    });
  }
}
