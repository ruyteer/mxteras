import { Product } from "../../entities/product";

export interface UpdateProductUseCase {
  update(httpRequest: Product): Promise<void>;
}
