import { Router } from "express";
import { productAdapt } from "../adapters/product";
import { middlewareAdapt } from "../adapters/middlewares";
import {
  makeMiddlewareProduct,
  makeCreateProduct,
  makeGetAllProduct,
  makeUploadMiddleware,
  makeDeleteProduct,
  makeGetOneProduct,
} from "../factories";
import { upload } from "../../../infra/services/multer/multer-config";
import { makeUpdateProduct } from "../factories/product/make-update";

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

productRouter.put(
  "/product/update/:id",
  middlewareAdapt(makeMiddlewareProduct()),
  productAdapt(makeUpdateProduct())
);

productRouter.get("/product/:id", productAdapt(makeGetOneProduct()));

export { productRouter };
