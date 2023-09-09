import { GetAllCouponsService } from "../../../../data/services/coupon/get-all-coupons";
import { CouponRepository } from "../../../../infra/repositories/coupon-repo";
import { GetAllCouponController } from "../../../../presentation/controllers/coupon/get-all-coupon";

import { Controller } from "../../../../presentation/protocols";

export const makeGetCoupon = (): Controller => {
  const repo = new CouponRepository();
  const usecase = new GetAllCouponsService(repo);

  return new GetAllCouponController(usecase);
};
