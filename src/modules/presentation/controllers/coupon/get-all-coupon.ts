import { GetAllCouponsService } from "../../../data/services/coupon/get-all-coupons";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";

export class GetAllCouponController implements Controller {
  constructor(private readonly getAllCouponUseCase: GetAllCouponsService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const coupons = await this.getAllCouponUseCase.getAll();

      return okResponse(coupons);
    } catch (error) {
      return badResponse(error);
    }
  }
}
