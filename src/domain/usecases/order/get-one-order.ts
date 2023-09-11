import { Order } from "../../entities/order";

export interface GetOneOrderUseCase {
  getOne(userId: string): Promise<Order>;
}
