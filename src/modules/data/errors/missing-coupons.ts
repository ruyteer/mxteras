export class MissingCouponError extends Error {
  constructor() {
    super(
      "We don't have coupons on database. Please, create a coupon to make this request"
    );
    this.name = "MissingCouponError";
  }
}
