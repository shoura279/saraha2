import { Router } from 'express';

const router  = Router();

router.post ("/verify", (req, res) => {

const email = req.body.email

res.status(200).json({message:'OTP generated successfully'})
})

export default router