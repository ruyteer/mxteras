import { CreateCouponService } from "../../../../data/services/coupon/create-coupon";
import { CouponRepository } from "../../../../infra/repositories/coupon-repo";
import { CreateCouponController } from "../../../../presentation/controllers/coupon/create-coupon";
import { Controller } from "../../../../presentation/protocols";

export const makeCreateCoupon = (): Controller => {
  const repo = new CouponRepository();
  const usecase = new CreateCouponService(repo);

  return new CreateCouponController(usecase);
};
