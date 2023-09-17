import { Banner } from "../../entities/banner";

export interface GetAllBannerUseCases {
  getAll(): Promise<Banner[]>;
}
