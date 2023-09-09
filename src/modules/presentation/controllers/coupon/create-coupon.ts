import { CreateCouponService } from "../../../data/services/coupon/create-coupon";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";
import { CouponViewModel } from "../../views/coupon";

export class CreateCouponController implements Controller {
  constructor(private readonly createCouponUseCases: CreateCouponService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const data: CouponViewModel = httpRequest.req.body;

      await this.createCouponUseCases.create({
        code: data.code,
        discount: parseInt(data.discount),
      });

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
