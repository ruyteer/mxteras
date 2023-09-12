import { Product } from "../../entities/product";

export interface UpdateProductUseCase {
  update(httpRequest?: Product, id?: string): Promise<void>;
}
