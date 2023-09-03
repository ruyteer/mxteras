import { Product } from "../../entities/product";

export interface GetOneProductUseCase {
  getOne(id: string): Promise<Product>;
}
