import { GetAllOrderService } from "../../../data/services/order/get-all-order";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";

export class GetAllOrderController implements Controller {
  constructor(private readonly getAllOrderUseCase: GetAllOrderService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const orders = await this.getAllOrderUseCase.getAll();

      return okResponse(orders);
    } catch (error) {
      return badResponse(error);
    }
  }
}
