import { GetOneProductUseCase } from "../../domain/usecases/product/get-one-product";
import { IProductRepository } from "../contracts/product-repository";
import { MissingParamError, MissingProductError } from "../errors";
import { ProductModel } from "../models/product-model";

export class GetOneProductService implements GetOneProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async getOne(id: string): Promise<ProductModel> {
    if (!id) {
      throw new MissingParamError("id");
    }

    const product = await this.productRepository.getOne(id);

    if (!product) {
      throw new MissingProductError();
    }

    return product;
  }
}
