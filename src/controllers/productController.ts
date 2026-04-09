import type { Request, Response } from "express";
import { getProducts } from "../services/productService.js";

export const listProducts = (req: Request, res: Response) => {
  const data = getProducts();
  res.status(200).json({
    success: true,
    count: data.length,
    data,
  });
};
