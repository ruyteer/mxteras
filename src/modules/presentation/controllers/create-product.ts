import { CreateProductService } from "../../data/services/create-product";
import { badResponse, okResponse } from "../helpers/http-response";
import { httpRequest, httpResponse, Controller } from "../protocols";
import { ProductViewModel } from "../views/product-view-model";

export class CreateProductController implements Controller {
  constructor(private readonly createProductUseCase: CreateProductService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const data: ProductViewModel = httpRequest.req.body;

      const imagesUrl = httpRequest.req.files.firebaseUrl;
      console.log("controller", imagesUrl);

      await this.createProductUseCase.create({
        name: data.name,
        description: data.description,
        price: data.price,
        quantity: parseInt(data.quantity),
        category: data.category,
        images: imagesUrl,
      });

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
