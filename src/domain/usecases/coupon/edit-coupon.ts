import { Coupon } from "../../entities/coupon";

export interface EditCouponUseCase {
  update(data: Coupon, id: string): Promise<void>;
}
