import { Product } from "../../../domain/entities/product";
import { UpdateProductUseCase } from "../../../domain/usecases/product/update-product";
import { IProductRepository } from "../contracts/product-repository";
import { MissingParamError, MissingProductError } from "../errors";

export class UpdateProductService implements UpdateProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async update(httpRequest: Product, id: string): Promise<void> {
    if (!id) {
      throw new MissingParamError("id");
    }

    const product = await this.productRepository.getOne(id);

    if (!product) {
      throw new MissingProductError();
    }

    await this.productRepository.update(httpRequest, id);
  }
}
