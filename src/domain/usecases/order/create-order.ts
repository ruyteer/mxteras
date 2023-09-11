import { Order } from "../../entities/order";

export interface CreateOrderUseCase {
  create(order: Order): Promise<void>;
}
