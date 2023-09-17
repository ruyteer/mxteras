import { EditCouponService } from "../../../../data/services/coupon/edit-coupon";
import { CouponRepository } from "../../../../infra/repositories/coupon-repo";
import { EditCouponController } from "../../../../presentation/controllers/coupon/edit-coupons";

import { Controller } from "../../../../presentation/protocols";

export const makeEditCoupon = (): Controller => {
  const repo = new CouponRepository();
  const usecase = new EditCouponService(repo);

  return new EditCouponController(usecase);
};
