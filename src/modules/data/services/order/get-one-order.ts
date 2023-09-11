import { GetOneOrderUseCase } from "../../../../domain/usecases/order/get-one-order";
import { IOrderRepository } from "../../contracts/order-repository";
import { MissingParamError, MissingOrderError } from "../../errors";
import { OrderModel } from "../../models/order-model";

export class GetOneOrderService implements GetOneOrderUseCase {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async getOne(userId: string): Promise<OrderModel> {
    if (!userId) {
      throw new MissingParamError("userId");
    }

    const order = await this.orderRepository.findUnique(userId);

    if (!order) {
      throw new MissingOrderError();
    }

    return order;
  }
}
