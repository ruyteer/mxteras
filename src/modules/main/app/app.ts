import express from "express";
import { productRouter } from "./routes/product-routes";
import { userRouter } from "./routes/user-routes";
import cors from "cors";
import { couponRoutes } from "./routes/coupon-routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.use(couponRoutes);

export { app };
