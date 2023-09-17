import { EditCouponService } from "../../../data/services/coupon/edit-coupon";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";

export class EditCouponController implements Controller {
  constructor(private readonly editCouponUseCases: EditCouponService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const { id } = httpRequest.req.params;
      const { code, discount } = httpRequest.req.body;

      await this.editCouponUseCases.update(
        { code, discount: parseInt(discount) },
        id
      );

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
