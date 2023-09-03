import { GetOneProductService } from "../../data/services/get-one-product";
import { badResponse, okResponse } from "../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../protocols";

export class GetOneProductController implements Controller {
  constructor(private readonly getOneProductUseCase: GetOneProductService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const { id } = httpRequest.req.params;

      const product = await this.getOneProductUseCase.getOne(id);

      return okResponse(product);
    } catch (error) {
      return badResponse(error);
    }
  }
}
