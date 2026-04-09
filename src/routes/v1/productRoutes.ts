import { Router } from "express";
import { listProducts } from "../../controllers/productController.js";

const productRouter = Router();

productRouter.get("/", listProducts);

export default productRouter;
