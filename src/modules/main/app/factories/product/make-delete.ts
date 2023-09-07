import { DeleteProductService } from "../../../../data/services/delete-product";
import { ProductRepository } from "../../../../infra/repositories/product-repo";
import { DeleteProductController } from "../../../../presentation/controllers/delete-product";
import { Controller } from "../../../../presentation/protocols";

export const makeDeleteProduct = (): Controller => {
  const productRepository = new ProductRepository();
  const usecase = new DeleteProductService(productRepository);
  return new DeleteProductController(usecase);
};
