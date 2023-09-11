import { CreateOrderUseCase } from "../../../../domain/usecases/order/create-order";
import { IOrderRepository } from "../../contracts/order-repository";
import { MissingParamError } from "../../errors";
import { OrderModel } from "../../models/order-model";

export class CreateOrderService implements CreateOrderUseCase {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async create(order: OrderModel): Promise<void> {
    const requiredFields = [
      "userId",
      "orderID",
      "quantity",
      "price",
      "productId",
      "date",
      "paymentMethod",
    ];

    for (const field of requiredFields) {
      if (!order[field]) {
        throw new MissingParamError(field);
      }
    }

    await this.orderRepository.save(order);
  }
}
