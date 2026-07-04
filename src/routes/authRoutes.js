//routes/authRoutes.js

import express from 'express';
import { validateCompanyEmail } from '../middlewares/authMiddleWare/emailDomainMiddleware.js';
import { register } from '../controllers/authControllers.js';
import { validatePassword } from '../middlewares/authMiddleWare/passwordMiddleware.js';
import { registerLimiter } from '../middlewares/authMiddleWare/registerLimiter.js';

const router = express.Router();

router.post(
  '/signup',
  validateCompanyEmail,
  validatePassword,
  registerLimiter,
  register
);

export default router;