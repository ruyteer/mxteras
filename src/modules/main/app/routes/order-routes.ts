import { Router } from "express";
import { productAdapt } from "../adapters/product";
import { makeCreateOrder } from "../factories/order/create-order";
import { makeGetAllOrder } from "../factories/order/get-all-order";
import { makeGetOneOrder } from "../factories/order/get-one-order";

const orderRoutes = Router();

orderRoutes.post(
  "/order/card/process_payment",
  productAdapt(makeCreateOrder())
);

orderRoutes.get("/orders", productAdapt(makeGetAllOrder()));
orderRoutes.get("/order/:id", productAdapt(makeGetOneOrder()));

export { orderRoutes };
