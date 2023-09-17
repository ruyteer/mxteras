import { GetAllBannerUseCases } from "../../../../domain/usecases/banner/get-all-banner";
import { IBannerRepository } from "../../contracts/banner-repository";
import { BannerModel } from "../../models/banner-model";

export class GetAllBannerService implements GetAllBannerUseCases {
  constructor(private readonly bannerRepository: IBannerRepository) {}

  async getAll(): Promise<BannerModel[]> {
    const banners = await this.bannerRepository.findAll();
    return banners;
  }
}
