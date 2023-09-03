import { GetAllProductService } from "../../data/services/get-all-products";
import { badResponse, okResponse } from "../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../protocols";

export class GetAllProductController implements Controller {
  constructor(private readonly getAllProductUseCase: GetAllProductService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const products = await this.getAllProductUseCase.getAll();

      return okResponse(products);
    } catch (error) {
      return badResponse(error);
    }
  }
}
