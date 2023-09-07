import { GetOneProductService } from "../../../../data/services/get-one-product";
import { ProductRepository } from "../../../../infra/repositories/product-repo";
import { GetOneProductController } from "../../../../presentation/controllers/get-one-product";
import { Controller } from "../../../../presentation/protocols";

export const makeGetOneProduct = (): Controller => {
  const productRepository = new ProductRepository();
  const usecase = new GetOneProductService(productRepository);
  return new GetOneProductController(usecase);
};
