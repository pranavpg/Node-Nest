import type { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  void next;
  const message = err instanceof Error ? err.message : "Internal Server Error";
  res.status(500).json({
    success: false,
    message,
  });
};
