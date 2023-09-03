import { Product } from "../../entities/product";

export interface GetAllProductUseCase {
  getAll(): Promise<Product[]>;
}
