import { Product } from "../../domain/entities/product";
import { CreateProductUseCase } from "../../domain/usecases/product/create-product";
import { IProductRepository } from "../contracts/product-repository";
import { MissingParamError } from "../errors/missing-param";

export class CreateProductService implements CreateProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async create(httpRequest: Product): Promise<void> {
    const requiredFields = [
      "name",
      "description",
      "price",
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
