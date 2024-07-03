export const asyncHandler = (fn) => {
    return async (req, res, next) => {
      fu(req, res, next).catch((err) => {
        return res.json(err)
      })
    }
  }
