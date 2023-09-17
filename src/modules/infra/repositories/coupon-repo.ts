import { prisma } from "../../../config/Prisma";
import { ICouponRepository } from "../../data/contracts/coupon-repository";
import { CouponModel } from "../../data/models/coupon-model";

export class CouponRepository implements ICouponRepository {
  async save(coupon: CouponModel): Promise<void> {
    await prisma.coupon.create({ data: coupon });
  }

  async findAll(): Promise<CouponModel[]> {
    return await prisma.coupon.findMany();
  }

  async delete(id: string): Promise<void> {
    await prisma.coupon.delete({ where: { id } });
  }

  async update(coupon: any, id: string): Promise<void> {
    await prisma.coupon.update({ where: { id }, data: coupon });
  }
}
