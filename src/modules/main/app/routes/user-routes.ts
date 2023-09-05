import { Router } from "express";
import {
  makeAdminLogin,
  makeCreateUserController,
  makeGetUserController,
} from "../factories";
import { productAdapt } from "../adapters/product";

const userRouter = Router();

userRouter.post("/admin/login", productAdapt(makeAdminLogin()));
userRouter.post("/user/create", productAdapt(makeCreateUserController()));
userRouter.get("/users", productAdapt(makeGetUserController()));

export { userRouter };
