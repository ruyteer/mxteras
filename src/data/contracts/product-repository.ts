import { ProductModel } from "../models/product-model";

export interface IProductRepository {
  create(product: ProductModel): Promise<void>;
  getAll(): Promise<ProductModel[]>;
}
