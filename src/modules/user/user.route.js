import { Router } from "express";
import { signUp } from "./user.controller.js";
import { asyncHandler } from "../../middleware/asyncHandler.js";

const userRouter = Router();

userRouter.post('/signup', asyncHandler(signUp))


export default userRouter