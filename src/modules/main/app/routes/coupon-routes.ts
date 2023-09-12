import { Router } from "express";
import { productAdapt } from "../adapters/product";
import { makeCreateCoupon } from "../factories/coupon/create-coupon";
import { makeGetCoupon } from "../factories/coupon/get-coupon";
import { middlewareAdapt } from "../adapters/middlewares";
import { makeMiddlewareProduct } from "../factories";

const couponRoutes = Router();

couponRoutes.post(
  "/coupon/create",
  middlewareAdapt(makeMiddlewareProduct()),
  productAdapt(makeCreateCoupon())
);

couponRoutes.get("/coupons", productAdapt(makeGetCoupon()));

export { couponRoutes };
