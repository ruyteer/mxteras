import { Router } from "express";
import { productAdapt } from "../adapters/product";
import { makeCreateCoupon } from "../factories/coupon/create-coupon";
import { makeGetCoupon } from "../factories/coupon/get-coupon";

const couponRoutes = Router();

couponRoutes.post("/coupon/create", productAdapt(makeCreateCoupon()));
couponRoutes.get("/coupons", productAdapt(makeGetCoupon()));

export { couponRoutes };
