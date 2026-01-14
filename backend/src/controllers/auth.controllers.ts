import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import type { Request, Response } from "express";

import User from "../models/users.model.js";
import File from "../models/file.model.js";

const register = asyncHandler(async (req: Request, res: Response) => {});
const login = asyncHandler(async (req: Request, res: Response) => {});
const logout = asyncHandler(async (req: Request, res: Response) => {});
const getCurrentUser = asyncHandler(async (req: Request, res: Response) => {});
const getProfile = asyncHandler(async (req: Request, res: Response) => {});
const updateProfile = asyncHandler(async (req: Request, res: Response) => {});
const updateUserDetails = asyncHandler(
  async (req: Request, res: Response) => {}
);
const changePassword = asyncHandler(async (req: Request, res: Response) => {});

// TODO: implement forgot password and reset password controllers

export {
  register,
  login,
  logout,
  getCurrentUser,
  getProfile,
  updateProfile,
  updateUserDetails,
  changePassword,
};
