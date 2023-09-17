import { CouponModel } from "../models/coupon-model";

export interface ICouponRepository {
  save(coupon: CouponModel): Promise<void>;
  findAll(): Promise<CouponModel[]>;
  delete(id: string): Promise<void>;
  update(coupon: any, id: string): Promise<void>;
}
