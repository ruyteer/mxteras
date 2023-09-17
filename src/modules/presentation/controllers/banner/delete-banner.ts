import { DeleteBannerService } from "../../../data/services/banner/delete-banner";
import { badResponse, okResponse } from "../../helpers/http-response";
import { httpRequest, httpResponse, Controller } from "../../protocols";

export class DeleteBannerController implements Controller {
  constructor(private readonly deleteBannerUseCases: DeleteBannerService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const { id } = httpRequest.req.params;

      await this.deleteBannerUseCases.delete(id);

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
