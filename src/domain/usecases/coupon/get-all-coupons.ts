import { Coupon } from "../../entities/coupon";

export interface GetAllCouponsUseCase {
  getAll(): Promise<Coupon[]>;
}
