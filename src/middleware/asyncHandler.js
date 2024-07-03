import { AppError } from "../utils/appError.js"

export const asyncHandler = (fn) => {
  return async (req, res, next) => {
    fn(req, res, next).catch((err) => {
      return next(new AppError(err.message, err.statusCode))
    })
  }
}
