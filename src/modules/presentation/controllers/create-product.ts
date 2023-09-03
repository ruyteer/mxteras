import { CreateProductService } from "../../data/services/create-product";
import { badResponse, okResponse } from "../helpers/http-response";
import { httpRequest, httpResponse, Controller } from "../protocols";
import { ProductViewModel } from "../views/product-view-model";

export class CreateProductController implements Controller {
  constructor(private readonly createProductUseCase: CreateProductService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const data: ProductViewModel = httpRequest.req.body;

      await this.createProductUseCase.create(data);

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
