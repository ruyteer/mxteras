import { CreateOrderService } from "../../../data/services/order/create-order";
import { PixMercadoPago } from "../../contracts/pix-mercado-pago";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";
import { PixMercadoPagoRequest } from "../../views/mercado-pago";

export class CreatePixOrder implements Controller {
  constructor(
    private readonly createOrderUseCase: CreateOrderService,
    private readonly pixMercadoPago: PixMercadoPago
  ) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const data: PixMercadoPagoRequest = httpRequest.req.body.data;
      const { productId, userId, quantity, price } = httpRequest.req.body;

      const response = await this.pixMercadoPago.createPix(data);

      await this.createOrderUseCase.create({
        userId,
        productId,
        date: response.date,
        paymentMethod: response.paymentMethod,
        quantity: parseInt(quantity),
        price: parseFloat(price),
        orderID: parseInt(response.id),
      });

      return okResponse(response);
    } catch (error) {
      return badResponse(error);
    }
  }
}
