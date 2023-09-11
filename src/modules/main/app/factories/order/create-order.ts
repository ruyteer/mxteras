import { CreateOrderService } from "../../../../data/services/order/create-order";
import { OrderRepository } from "../../../../infra/repositories/order-repo";
import { MercadoPagoCreateOrder } from "../../../../infra/services/mercado-pago/mercado-pago";
import { CreateOrderController } from "../../../../presentation/controllers/order/create-order";
import { Controller } from "../../../../presentation/protocols";

export const makeCreateOrder = (): Controller => {
  const repository = new OrderRepository();
  const usecase = new CreateOrderService(repository);
  const mercadoPago = new MercadoPagoCreateOrder();
  return new CreateOrderController(usecase, mercadoPago);
};
