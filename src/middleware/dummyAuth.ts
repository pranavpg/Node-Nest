import type { NextFunction, Request, Response } from "express";
export const dummyAuth = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;

  if (auth !== "Bearer 12345pranav") {
    return res.status(401).json({
      success: false,
      message: "please add valid token",
    });
  }

  next();
};
