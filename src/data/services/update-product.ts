import { Product } from "../../domain/entities/product";
import { UpdateProductUseCase } from "../../domain/usecases/product/update-product";
import { IProductRepository } from "../contracts/product-repository";
import { MissingParamError } from "../errors";

export class UpdateProductService implements UpdateProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async update(httpRequest: Product): Promise<void> {
    if (!httpRequest) {
      throw new MissingParamError("All");
    }

    await this.productRepository.update(httpRequest);
  }
}
