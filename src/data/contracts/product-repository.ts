import { ProductModel } from "../models/product-model";

export interface IProductRepository {
  create(product: ProductModel): Promise<void>;
  getAll(): Promise<ProductModel[]>;
  getOne(id: string): Promise<ProductModel>;
  update(product: ProductModel): Promise<void>;
}
