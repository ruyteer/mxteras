import express from "express";
import { productRouter } from "./routes/product-routes";
import { userRouter } from "./routes/user-routes";
import cors from "cors";
import { couponRoutes } from "./routes/coupon-routes";
import { orderRoutes } from "./routes/order-routes";
import { bannerRoutes } from "./routes/banner-routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.use(couponRoutes);
app.use(orderRoutes);
app.use(bannerRoutes);

export { app };
