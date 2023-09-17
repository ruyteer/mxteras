import { CreateBannerService } from "../../../../data/services/banner/create-banner";
import { BannerRepository } from "../../../../infra/repositories/banner-repo";
import { CreateBannerController } from "../../../../presentation/controllers/banner/create-banner";
import { Controller } from "../../../../presentation/protocols";

export const makeCreateBanner = (): Controller => {
  const repo = new BannerRepository();
  const usecase = new CreateBannerService(repo);

  return new CreateBannerController(usecase);
};
