import { DeleteProductService } from "../../data/services/delete-product";
import { badResponse, okResponse } from "../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../protocols";

export class DeleteProductController implements Controller {
  constructor(private readonly deleteProductUseCase: DeleteProductService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const { id } = httpRequest.req.params;

      await this.deleteProductUseCase.delete(id);

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
