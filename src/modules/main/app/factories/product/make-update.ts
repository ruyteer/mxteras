import { UpdateProductService } from "../../../../data/services/update-product";
import { ProductRepository } from "../../../../infra/repositories/product-repo";
import { UpdateProductController } from "../../../../presentation/controllers/update-product";
import { Controller } from "../../../../presentation/protocols";

export const makeUpdateProduct = (): Controller => {
  const productRepository = new ProductRepository();
  const usecase = new UpdateProductService(productRepository);
  return new UpdateProductController(usecase);
};
