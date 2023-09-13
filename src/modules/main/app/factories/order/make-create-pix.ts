import { CreateOrderService } from "../../../../data/services/order/create-order";
import { OrderRepository } from "../../../../infra/repositories/order-repo";
import { CreatePixMercadoPago } from "../../../../infra/services/mercado-pago/pix-mercado-pago";
import { CreatePixOrder } from "../../../../presentation/controllers/order/create-pix-order";
import { Controller } from "../../../../presentation/protocols";

export const makeCreatePixOrder = (): Controller => {
  const repository = new OrderRepository();
  const usecase = new CreateOrderService(repository);
  const mercadoPago = new CreatePixMercadoPago();
  return new CreatePixOrder(usecase, mercadoPago);
};
