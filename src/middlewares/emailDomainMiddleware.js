//middlewares/emailDomainMiddleware

export function validateCompanyEmail(req, res, next) {
  const allowedDomain = process.env.ALLOWED_EMAIL_DOMAIN;
  const { email } = req.body;

  const domain = email?.split("@")[1];

  if (domain !== allowedDomain) {
    return res.status(400).json({
      message: "Only Company email addresses are allowed"
    });
  }

  next();
}


