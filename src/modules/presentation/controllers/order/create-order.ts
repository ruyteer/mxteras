import { CreateOrderService } from "../../../data/services/order/create-order";
import { IMercadoPagoCreateOrder } from "../../contracts/mercado-pago";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";
import { MercadoPagoRequest } from "../../views/mercado-pago";

export class CreateOrderController implements Controller {
  constructor(
    private readonly createOrderUseCase: CreateOrderService,
    private readonly mercadoPagoCreateOrder: IMercadoPagoCreateOrder
  ) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const data: MercadoPagoRequest = httpRequest.req.body.data;
      const { userId, productId } = httpRequest.req.body;

      const response = await this.mercadoPagoCreateOrder.create(data);

      await this.createOrderUseCase.create({
        userId,
        productId,
        date: "1",
        paymentMethod: "credit",
      });

      return okResponse(response);
    } catch (error) {
      return badResponse(error);
    }
  }
}
