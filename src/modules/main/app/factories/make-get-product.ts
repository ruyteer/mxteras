import { GetAllProductService } from "../../../data/services/get-all-products";
import { ProductRepository } from "../../../infra/repositories/product-repo";
import { GetAllProductController } from "../../../presentation/controllers/get-all-products";
import { Controller } from "../../../presentation/protocols";

export const makeGetAllProduct = (): Controller => {
  const productRepository = new ProductRepository();
  const usecase = new GetAllProductService(productRepository);
  return new GetAllProductController(usecase);
};
