import { Router } from 'express';
import { User } from '../../../db/models/user.model.js';
import { AppError } from '../../utils/appError';

const router = Router();

router.post("/verify", async (req, res) => {

  const { email, OTP } = req.body
  const user = await User.findOne({ email })
  if (user.OTP != OTP) {
    return next(new AppError('Invalid OTP', 401))
  }
  user.verified = true
  user.OTP = undefined
  user.expireOtp = undefined
  await user.save()
  res.status(200).json({ message: 'account verified', success: true })
})

export default router