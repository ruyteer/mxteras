import { DeleteCouponUseCase } from "../../../../domain/usecases/coupon/delete-coupon";
import { ICouponRepository } from "../../contracts/coupon-repository";
import { MissingParamError } from "../../errors";

export class DeleteCouponService implements DeleteCouponUseCase {
  constructor(private readonly couponRepository: ICouponRepository) {}

  async delete(id: string): Promise<void> {
    if (!id) {
      throw new MissingParamError("id");
    }

    await this.couponRepository.delete(id);
  }
}
