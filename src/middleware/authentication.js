import jwt from 'jsonwebtoken'
import { User } from '../../db/models/user.model.js'
import { AppError } from '../utils/appError.js'

export const auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  if (!token) return next(new AppError('No token provided', 401))

  try {
    const payload = jwt.verify(token, 'secret_key')
    const authUser = await User.findById(payload.userId)
    if (!authUser) return next(new AppError('user not found', 401))
    req.authUser = authUser
    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' })
  }
}

