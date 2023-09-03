import { Product } from "../../entities/product";

export interface CreateProductUseCase {
  create(productData: Product): Promise<void>;
}
