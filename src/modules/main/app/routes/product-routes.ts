import { Router } from "express";
import { productAdapt } from "../adapters/product";
import { middlewareAdapt } from "../adapters/middlewares";
import {
  makeMiddlewareProduct,
  makeCreateProduct,
  makeGetAllProduct,
} from "../factories";

const productRouter = Router();

productRouter.get("/products", productAdapt(makeGetAllProduct()));
productRouter.post(
  "/product/create",
  middlewareAdapt(makeMiddlewareProduct()),
  productAdapt(makeCreateProduct())
);

export { productRouter };
