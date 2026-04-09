import { Router } from "express";
import productRouter from "./v1/productRoutes.js";
import userRouter from "./v1/userRoutes.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Your server is running..testing",
  });
});

router.use("/api/v1/users", userRouter);
router.use("/api/v1/products", productRouter);
export default router;
