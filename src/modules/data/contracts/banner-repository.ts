import { BannerModel } from "../models/banner-model";

export interface IBannerRepository {
  findAll(): Promise<BannerModel[]>;
  create(file: string): Promise<void>;
  delete(id: string): Promise<void>;
}
