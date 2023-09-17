import { DeleteCouponService } from "../../../../data/services/coupon/delete-coupon";
import { CouponRepository } from "../../../../infra/repositories/coupon-repo";
import { DeleteCouponController } from "../../../../presentation/controllers/coupon/delete-coupon";

import { Controller } from "../../../../presentation/protocols";

export const makeDeleteCoupon = (): Controller => {
  const repo = new CouponRepository();
  const usecase = new DeleteCouponService(repo);

  return new DeleteCouponController(usecase);
};
