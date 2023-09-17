import { Router } from "express";
import { upload } from "../../../infra/services/multer/multer-config";
import { middlewareAdapt } from "../adapters/middlewares";
import { makeUploadMiddleware } from "../factories";
import { productAdapt } from "../adapters/product";
import { makeCreateBanner } from "../factories/banner/create-banner";
import { makeGetAllBanner } from "../factories/banner/get-all-banner";
import { makeDeleteBanner } from "../factories/banner/delete-banner";

const bannerRoutes = Router();

bannerRoutes.post(
  "/banner/create",
  upload.array("file"),
  middlewareAdapt(makeUploadMiddleware()),
  productAdapt(makeCreateBanner())
);

bannerRoutes.get("/banners", productAdapt(makeGetAllBanner()));
bannerRoutes.delete("/banner/delete/:id", productAdapt(makeDeleteBanner()));

export { bannerRoutes };
