import express, { type Response, type Request } from "express";
import cors from "cors";
import asyncHandler from "./utils/asyncHandler.js";
import ApiResponse from "./utils/ApiResponse.js";

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

export default app;
