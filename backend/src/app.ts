import express, { type Response, type Request } from "express";
import cors from "cors";
import asyncHandler from "./utils/asyncHandler.js";
import ApiResponse from "./utils/ApiResponse.js";

import authRouter from "./routes/auth.routes.js";

const app = express();

// Health Check Route
app.get(
  "/health",
  asyncHandler(async (req: Request, res: Response) => {
    const data = {
      status: "OK",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };

    res.json(new ApiResponse(200, "Everything is working fine!", data));
  })
);

// middlewares
app.use(
  cors({
    origin: process.env.ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/auth", authRouter);

export default app;
