//middlewares/emailDomainMiddleware

export function validateCompanyEmail(req, res, next) {
  const allowedDomain = process.env.ALLOWED_EMAIL_DOMAIN;
  if (!allowedDomain) {
  return res.status(500).json({
    message: "Server configuration error",
  });
}
  const { email } = req.body;

   if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }
  const domain = email?.split("@")[1];

  if (domain !== allowedDomain) {
    return res.status(400).json({
      message: "Only Company email addresses are allowed"
    });
  }

  next();
}


