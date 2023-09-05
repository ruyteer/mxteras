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

const productRouter = Router();

productRouter.get("/products", productAdapt(makeGetAllProduct()));
productRouter.post(
  "/product/create",
  upload.single("file"),
  middlewareAdapt(makeUploadMiddleware()),
  // middlewareAdapt(makeMiddlewareProduct()),
  productAdapt(makeCreateProduct())
);

export { productRouter };
