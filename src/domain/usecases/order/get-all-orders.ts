import { Order } from "../../entities/order";

export interface GetAllOrderUseCase {
  getAll(): Promise<Order[]>;
}
