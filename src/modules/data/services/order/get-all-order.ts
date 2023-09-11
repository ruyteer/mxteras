import { GetAllOrderUseCase } from "../../../../domain/usecases/order/get-all-orders";
import { IOrderRepository } from "../../contracts/order-repository";
import { MissingOrderError } from "../../errors/missing-order";
import { OrderModel } from "../../models/order-model";

export class GetAllOrderService implements GetAllOrderUseCase {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async getAll(): Promise<OrderModel[]> {
    const orders = await this.orderRepository.findMany();

    if (!orders) {
      throw new MissingOrderError();
    }

    return orders;
  }
}
