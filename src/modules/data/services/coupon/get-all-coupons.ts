import { GetAllCouponsUseCase } from "../../../../domain/usecases/coupon/get-all-coupons";
import { ICouponRepository } from "../../contracts/coupon-repository";
import { MissingCouponError } from "../../errors/missing-coupons";
import { CouponModel } from "../../models/coupon-model";

export class CreateCouponService implements GetAllCouponsUseCase {
  constructor(private readonly couponRepository: ICouponRepository) {}

  async getAll(): Promise<CouponModel[]> {
    const coupons = await this.couponRepository.findAll();

    if (!coupons) {
      throw new MissingCouponError();
    }

    return coupons;
  }
}
