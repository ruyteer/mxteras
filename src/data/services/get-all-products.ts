import { Product } from "../../domain/entities/product";
import { GetAllProductUseCase } from "../../domain/usecases/product/get-all-product";
import { IProductRepository } from "../contracts/product-repository";
import { MissingProductError } from "../errors/missing-product";

export class GetAllProductService implements GetAllProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async getAll(): Promise<Product[]> {
    const products = await this.productRepository.getAll();

    if (products.length === 0) {
      throw new MissingProductError();
    }

    return products;
  }
}
