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
import { makeDeleteUser } from "../factories/user/make-delete";
import { makeGetOneUser } from "../factories/user/get-one-user";

const userRouter = Router();

userRouter.post("/admin/login", productAdapt(makeAdminLogin()));
userRouter.post("/user/create", productAdapt(makeCreateUserController()));
userRouter.get("/users", productAdapt(makeGetUserController()));
userRouter.delete(
  "/user/delete/:id",
  middlewareAdapt(makeMiddlewareProduct()),
  productAdapt(makeDeleteUser())
);

userRouter.get("/user/:id", productAdapt(makeGetOneUser()));

export { userRouter };
