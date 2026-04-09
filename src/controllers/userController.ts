import type { Request, Response } from "express";
import { getUsers } from "../services/userService.js";

export const listUsers = (req: Request, res: Response) => {
  const data = getUsers();
  res.status(200).json({
    success: true,
    count: data.length,
    data,
  });
};
