import { Router } from "express";
import { productAdapt } from "../adapters/product";
import { makeCreateOrder } from "../factories/order/create-order";
import { makeGetAllOrder } from "../factories/order/get-all-order";
import { makeGetOneOrder } from "../factories/order/get-one-order";
import { makeCreatePixOrder } from "../factories/order/make-create-pix";
import { makeCreatePreference } from "../factories/preference/make-create";

const orderRoutes = Router();

orderRoutes.post(
  "/order/card/process_payment",
  productAdapt(makeCreateOrder())
);
orderRoutes.post(
  "/order/pix/process_payment",
  productAdapt(makeCreatePixOrder())
);
orderRoutes.post(
  "/order/preference/create",
  productAdapt(makeCreatePreference())
);

orderRoutes.get("/orders", productAdapt(makeGetAllOrder()));
orderRoutes.get("/order/:id", productAdapt(makeGetOneOrder()));

export { orderRoutes };
