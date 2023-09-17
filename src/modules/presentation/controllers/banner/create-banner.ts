import { CreateBannerService } from "../../../data/services/banner/create-banner";
import { badResponse, okResponse } from "../../helpers/http-response";
import { httpRequest, httpResponse, Controller } from "../../protocols";

export class CreateBannerController implements Controller {
  constructor(private readonly createBannerUseCase: CreateBannerService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const imagesUrl = httpRequest.req.files.firebaseUrl;

      await this.createBannerUseCase.create(imagesUrl[0]);

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
