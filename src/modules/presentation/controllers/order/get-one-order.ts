import { GetOneOrderService } from "../../../data/services/order/get-one-order";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";

export class GetOneOrderController implements Controller {
  constructor(private readonly getOneOrderUseCase: GetOneOrderService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const { id } = httpRequest.req.params;

      const order = await this.getOneOrderUseCase.getOne(id);

      return okResponse(order);
    } catch (error) {
      return badResponse(error);
    }
  }
}
