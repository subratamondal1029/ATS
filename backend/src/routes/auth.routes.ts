import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import {
  register,
  login,
  logout,
  getCurrentUser,
  getProfile,
  updateProfile,
  updateUserDetails,
  changePassword,
} from "../controllers/auth.controllers.js";

const router = Router();

export default router;
