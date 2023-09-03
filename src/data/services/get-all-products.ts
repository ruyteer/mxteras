import { GetAllProductUseCase } from "../../domain/usecases/product/get-all-product";
import { IProductRepository } from "../contracts/product-repository";
import { MissingProductError } from "../errors";
import { ProductModel } from "../models/product-model";

export class GetAllProductService implements GetAllProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async getAll(): Promise<ProductModel[]> {
    const products = await this.productRepository.getAll();

    if (products.length === 0) {
      throw new MissingProductError();
    }

    return products;
  }
}
