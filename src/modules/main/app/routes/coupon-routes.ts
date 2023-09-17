import { Router } from "express";
import { productAdapt } from "../adapters/product";
import { makeCreateCoupon } from "../factories/coupon/create-coupon";
import { makeGetCoupon } from "../factories/coupon/get-coupon";
import { middlewareAdapt } from "../adapters/middlewares";
import { makeMiddlewareProduct } from "../factories";
import { makeDeleteCoupon } from "../factories/coupon/delete-coupon";
import { makeEditCoupon } from "../factories/coupon/edit-coupons";

const couponRoutes = Router();

couponRoutes.post(
  "/coupon/create",
  middlewareAdapt(makeMiddlewareProduct()),
  productAdapt(makeCreateCoupon())
);

couponRoutes.get("/coupons", productAdapt(makeGetCoupon()));
couponRoutes.delete(
  "/coupon/delete/:id",
  middlewareAdapt(makeMiddlewareProduct()),
  productAdapt(makeDeleteCoupon())
);
couponRoutes.put(
  "/coupon/edit/:id",
  middlewareAdapt(makeMiddlewareProduct()),
  productAdapt(makeEditCoupon())
);

export { couponRoutes };
