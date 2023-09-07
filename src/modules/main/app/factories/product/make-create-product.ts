import { CreateProductService } from "../../../../data/services/create-product";
import { ProductRepository } from "../../../../infra/repositories/product-repo";
import { CreateProductController } from "../../../../presentation/controllers/create-product";
import { Controller } from "../../../../presentation/protocols";

export const makeCreateProduct = (): Controller => {
  const productRepository = new ProductRepository();
  const usecase = new CreateProductService(productRepository);
  return new CreateProductController(usecase);
};
