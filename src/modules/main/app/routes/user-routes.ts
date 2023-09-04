import { Router } from "express";
import { makeAdminLogin } from "../factories";
import { productAdapt } from "../adapters/product";

const userRouter = Router();

userRouter.post("/admin/login", productAdapt(makeAdminLogin()));

export { userRouter };
