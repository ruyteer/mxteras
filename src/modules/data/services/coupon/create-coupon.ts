import { CreateCouponUseCases } from "../../../../domain/usecases/coupon/create-coupon";
import { ICouponRepository } from "../../contracts/coupon-repository";
import { MissingParamError } from "../../errors";
import { CouponModel } from "../../models/coupon-model";

export class CreateCouponService implements CreateCouponUseCases {
  constructor(private readonly couponRepository: ICouponRepository) {}

  async create(coupon: CouponModel): Promise<void> {
    const requiredFields = ["code", "discount"];
    for (const field of requiredFields) {
      if (!coupon[field]) {
        throw new MissingParamError(field);
      }
    }

    await this.couponRepository.save(coupon);
  }
}
