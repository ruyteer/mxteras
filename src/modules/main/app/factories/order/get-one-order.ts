import { GetOneOrderService } from "../../../../data/services/order/get-one-order";
import { OrderRepository } from "../../../../infra/repositories/order-repo";
import { GetOneOrderController } from "../../../../presentation/controllers/order/get-one-order";
import { Controller } from "../../../../presentation/protocols";

export const makeGetOneOrder = (): Controller => {
  const repository = new OrderRepository();
  const usecase = new GetOneOrderService(repository);
  return new GetOneOrderController(usecase);
};
