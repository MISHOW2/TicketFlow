//routes/authRoutes.js

import express from 'express';
import { validateCompanyEmail } from '../middlewares/emailDomainMiddleware.js';
import { register } from '../controllers/authControllers.js';

const router = express.Router();

router.post(
  '/signup',
  validateCompanyEmail,
  register
);

export default router;