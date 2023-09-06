import { CreateProductUseCase } from "../../../domain/usecases/product/create-product";
import { IProductRepository } from "../contracts/product-repository";
import { MissingParamError } from "../errors";
import { ProductModel } from "../models/product-model";

export class CreateProductService implements CreateProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async create(httpRequest: ProductModel): Promise<void> {
    const requiredFields = [
      "name",
      "description",
      "price",
      "category",
      "quantity",
      "images",
    ];

    for (const field of requiredFields) {
      if (!httpRequest[field]) {
        throw new MissingParamError(field);
      }
    }

    await this.productRepository.create(httpRequest);
  }
}
