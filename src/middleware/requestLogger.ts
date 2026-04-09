import type { NextFunction, Request, Response } from "express";
import { log } from "../utils/logger.js";

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on("finish", () => {
    const ms = Date.now() - start;
    const message = `${req.method} ${req.originalUrl} -> ${res.statusCode} (${ms}ms)`;
    console.log(message);
    void log(`API ${message}`).catch((error) => {
      console.error("Failed to write API log:", error);
    });
  });

  next();
};
