// import modules:
import { Router } from "express";
import { login } from "./user.controller.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { auth } from "../middleware/authentication.js";
// create router:
const userRouter = Router()
// sign in
userRouter.post("/login" ,asyncHandler(login));
export default userRouter
