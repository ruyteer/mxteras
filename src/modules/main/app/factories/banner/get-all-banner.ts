import { GetAllBannerService } from "../../../../data/services/banner/get-all-banner";
import { BannerRepository } from "../../../../infra/repositories/banner-repo";
import { GetAllBannerController } from "../../../../presentation/controllers/banner/get-all-banner";
import { Controller } from "../../../../presentation/protocols";

export const makeGetAllBanner = (): Controller => {
  const repo = new BannerRepository();
  const usecase = new GetAllBannerService(repo);

  return new GetAllBannerController(usecase);
};
