import { GetAllBannerService } from "../../../data/services/banner/get-all-banner";
import { badResponse, okResponse } from "../../helpers/http-response";
import { httpRequest, httpResponse, Controller } from "../../protocols";

export class GetAllBannerController implements Controller {
  constructor(private readonly getAllBannerUseCase: GetAllBannerService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const banners = await this.getAllBannerUseCase.getAll();

      return okResponse(banners);
    } catch (error) {
      return badResponse(error);
    }
  }
}
