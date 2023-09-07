import { Router } from "express";
import { productAdapt } from "../adapters/product";
import { middlewareAdapt } from "../adapters/middlewares";
import {
  makeMiddlewareProduct,
  makeCreateProduct,
  makeGetAllProduct,
  makeUploadMiddleware,
} from "../factories";
import { upload } from "../../../infra/services/multer/multer-config";
import { makeDeleteProduct } from "../factories/make-delete";

const productRouter = Router();

productRouter.get("/products", productAdapt(makeGetAllProduct()));
productRouter.post(
  "/product/create",
  upload.array("file"),
  middlewareAdapt(makeUploadMiddleware()),
  middlewareAdapt(makeMiddlewareProduct()),
  productAdapt(makeCreateProduct())
);

productRouter.delete(
  "/product/delete/:id",
  middlewareAdapt(makeMiddlewareProduct()),
  productAdapt(makeDeleteProduct())
);

export { productRouter };
