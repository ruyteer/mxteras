import { OrderModel } from "../models/order-model";

export interface IOrderRepository {
  save(order: OrderModel): Promise<void>;
  findMany(): Promise<OrderModel[]>;
  findUnique(userId: string): Promise<OrderModel>;
}
