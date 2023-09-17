import { DeleteBannerUseCases } from "../../../../domain/usecases/banner/delete-banner";
import { IBannerRepository } from "../../contracts/banner-repository";
import { MissingParamError } from "../../errors";

export class DeleteBannerService implements DeleteBannerUseCases {
  constructor(private readonly bannerRepository: IBannerRepository) {}

  async delete(id: string): Promise<void> {
    if (!id) {
      throw new MissingParamError("id");
    }

    await this.bannerRepository.delete(id);
  }
}
