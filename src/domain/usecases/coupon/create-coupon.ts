import { Coupon } from "../../entities/coupon";

export interface CreateCouponUseCases {
  create(coupon: Coupon): Promise<void>;
}
