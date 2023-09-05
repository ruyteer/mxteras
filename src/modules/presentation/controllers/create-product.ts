import { CreateProductService } from "../../data/services/create-product";
import { badResponse, okResponse } from "../helpers/http-response";
import { httpRequest, httpResponse, Controller } from "../protocols";
import { ProductViewModel } from "../views/product-view-model";

export class CreateProductController implements Controller {
  constructor(private readonly createProductUseCase: CreateProductService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const data: ProductViewModel = httpRequest.req.body;

      const imagesUrl = httpRequest.req.file.firebaseUrl;

      await this.createProductUseCase.create({
        name: data.name,
        description: data.description,
        price: parseInt(data.price),
        quantity: parseInt(data.quantity),
        images: [imagesUrl],
      });

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
