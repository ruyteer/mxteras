import { UpdateProductService } from "../../data/services/update-product";
import { badResponse, okResponse } from "../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../protocols";
import { ProductViewModel } from "../views/product-view-model";

export class UpdateProductController implements Controller {
  constructor(private readonly updateProductUseCase: UpdateProductService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const data: ProductViewModel = httpRequest.req.body;
      const { id } = httpRequest.req.params;

      await this.updateProductUseCase.update(data, id);

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
