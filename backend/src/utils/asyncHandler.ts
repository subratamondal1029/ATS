import type { NextFunction, Request, Response } from "express";
import ApiError from "./ApiError.js";

type AcceptableAsyncFunction = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<void | Response>;

const asyncHandler =
  (fn: AcceptableAsyncFunction) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch((err: Error | unknown) => {
      let errorResponse = err;

      if (err instanceof ApiError) {
        errorResponse = err;
      } else {
        errorResponse = new ApiError(
          500,
          (err as Error).message || "Internal Server Error",
          (err as Error).stack
        );
      }

      if (process.env.NODE_ENV === "development") {
        console.error("Error occurred 🔴:", err);
      }

      return res.status((errorResponse as ApiError).status).json(errorResponse);
    });

export default asyncHandler;
