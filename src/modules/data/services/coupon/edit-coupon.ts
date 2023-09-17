import { EditCouponUseCase } from "../../../../domain/usecases/coupon/edit-coupon";
import { ICouponRepository } from "../../contracts/coupon-repository";
import { MissingParamError } from "../../errors";
import { CouponModel } from "../../models/coupon-model";

export class EditCouponService implements EditCouponUseCase {
  constructor(private readonly couponRepository: ICouponRepository) {}

  async update(data: CouponModel, id: string): Promise<void> {
    const updateData = {};

    const receivedFields = ["code", "discount"];

    for (const field of receivedFields) {
      if (data[field]) {
        updateData[field] = data[field];
      }
    }

    if (!id) {
      throw new MissingParamError("id");
    }

    await this.couponRepository.update(updateData, id);
  }
}
