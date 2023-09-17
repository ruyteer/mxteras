import { DeleteBannerService } from "../../../../data/services/banner/delete-banner";
import { BannerRepository } from "../../../../infra/repositories/banner-repo";
import { DeleteBannerController } from "../../../../presentation/controllers/banner/delete-banner";
import { Controller } from "../../../../presentation/protocols";

export const makeDeleteBanner = (): Controller => {
  const repo = new BannerRepository();
  const usecase = new DeleteBannerService(repo);

  return new DeleteBannerController(usecase);
};
