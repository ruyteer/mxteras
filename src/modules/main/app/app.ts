import express from "express";
import { productRouter } from "./routes/product-routes";
import { userRouter } from "./routes/user-routes";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(productRouter);
app.use(userRouter);

export { app };
