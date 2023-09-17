import { CreateBannerUseCases } from "../../../../domain/usecases/banner/create-banner";
import { IBannerRepository } from "../../contracts/banner-repository";
import { MissingParamError } from "../../errors";

export class CreateBannerService implements CreateBannerUseCases {
  constructor(private readonly bannerRepository: IBannerRepository) {}

  async create(file: string): Promise<void> {
    if (!file) {
      throw new MissingParamError("file");
    }

    await this.bannerRepository.create(file);
  }
}
