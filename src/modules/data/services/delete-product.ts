import { DeleteProductUseCase } from "../../../domain/usecases/product/delete-product";
import { IProductRepository } from "../contracts/product-repository";
import { MissingParamError } from "../errors";

export class DeleteProductService implements DeleteProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async delete(id: string): Promise<void> {
    if (!id) {
      throw new MissingParamError("id");
    }

    await this.productRepository.delete(id);
  }
}
