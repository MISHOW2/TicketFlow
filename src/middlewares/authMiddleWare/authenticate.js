import jwt from 'jsonwebtoken';

export function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(' ')[1]; // get the part after "Bearer "

  if (!token) {
    return res.status(401).json({ message: "Invalid token format" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role } now available in every route
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

