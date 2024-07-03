import { Router } from "express";
import { signUp, login } from "./user.controller.js";
import { asyncHandler } from "../../middleware/asyncHandler.js";
const userRouter = Router();
userRouter.post('/signup', asyncHandler(signUp))
// sign in
userRouter.post("/login", asyncHandler(login));
export default userRouter
