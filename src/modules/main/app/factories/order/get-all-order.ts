import { GetAllOrderService } from "../../../../data/services/order/get-all-order";
import { OrderRepository } from "../../../../infra/repositories/order-repo";
import { GetAllOrderController } from "../../../../presentation/controllers/order/get-all-order";
import { Controller } from "../../../../presentation/protocols";

export const makeGetAllOrder = (): Controller => {
  const repository = new OrderRepository();
  const usecase = new GetAllOrderService(repository);
  return new GetAllOrderController(usecase);
};
