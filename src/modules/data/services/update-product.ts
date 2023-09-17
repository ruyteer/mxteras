import { UpdateProductUseCase } from "../../../domain/usecases/product/update-product";
import { IProductRepository } from "../contracts/product-repository";
import { MissingParamError, MissingProductError } from "../errors";
import { ProductModel } from "../models/product-model";

export class UpdateProductService implements UpdateProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async update(httpRequest?: ProductModel, id?: string): Promise<void> {
    const updateData = {};

    const receivedFields = [
      "name",
      "description",
      "quantity",
      "category",
      "price",
      "images",
    ];

    for (const field of receivedFields) {
      if (httpRequest["price"]) {
        updateData["price"] = parseFloat(httpRequest.price);
      }
      if (httpRequest["quantity"] === 0) {
        updateData["quantity"] = 0;
      }
      if (httpRequest[field]) {
        updateData[field] = httpRequest[field];
      }
    }

    if (!id) {
      throw new MissingParamError("id");
    }

    const product = await this.productRepository.getOne(id);

    if (!product) {
      throw new MissingProductError();
    }

    await this.productRepository.update(updateData, id);
  }
}
