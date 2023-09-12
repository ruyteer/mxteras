import { Router } from "express";
import {
  makeAdminLogin,
  makeCreateUserController,
  makeDeleteProduct,
  makeGetUserController,
  makeMiddlewareProduct,
} from "../factories";
import { productAdapt } from "../adapters/product";
import { middlewareAdapt } from "../adapters/middlewares";

const userRouter = Router();

userRouter.post("/admin/login", productAdapt(makeAdminLogin()));
userRouter.post("/user/create", productAdapt(makeCreateUserController()));
userRouter.get("/users", productAdapt(makeGetUserController()));
userRouter.delete(
  "/user/delete/:id",
  middlewareAdapt(makeMiddlewareProduct()),
  productAdapt(makeDeleteProduct())
);

export { userRouter };
