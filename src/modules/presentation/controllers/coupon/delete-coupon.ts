import { DeleteCouponService } from "../../../data/services/coupon/delete-coupon";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";

export class DeleteCouponController implements Controller {
  constructor(private readonly deleteCouponUseCases: DeleteCouponService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const { id } = httpRequest.req.params;

      await this.deleteCouponUseCases.delete(id);

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
