import { ProductModel } from "../models/product-model";
import { ProductView } from "../views/product";

export interface IProductRepository {
  create(product: ProductModel): Promise<void>;
  getAll(): Promise<ProductView[]>;
  getOne(id: string): Promise<ProductView>;
  update(product: ProductModel, id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
