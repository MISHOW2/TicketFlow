// services/userServices.js

import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js";
import { validateFieldInputs } from "../validation/validateFieldInputs.js";
import { ALLOWED_DEPARTMENTS } from "../constants/departments.js";
import jwt from "jsonwebtoken";
export async function registerUser({
  name,
  email,
  department,
  password,
  rePassword,
}) {
  validateFieldInputs({
    name,
    email,
    department,
    password,
    rePassword,
  });

  // Normalize values
  email = email.trim().toLowerCase();
  department = department.trim().toLowerCase();


  // Validate department
 
if (!ALLOWED_DEPARTMENTS.includes(department)) {
  throw new Error("Invalid department");
}


  // Validate password confirmation
  if (password !== rePassword) {
    throw new Error("Passwords do not match");
  }

  // Check if user already exists
  const existingUser = await userRepository.getUserByEmail(email);

  if (existingUser) {
    throw new Error(
      "Registration failed, please contact administrator"
    );
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  return await userRepository.createUser({
    name: name.trim(),
    email,
    department,
    password: hashedPassword,
  });
}

export async function userLogin({ email, password, }) {
   validateFieldInputs({ email, password });
  
   email = email.trim().toLowerCase();
 
  const user = await userRepository.getUserByEmail(email);
  // Validate required fields

  if(!user) throw new Error("Invalid email or password");

  //validate password if they match or not
  
  const isMatch = await bcrypt.compare(password, user.password)
  
  if(!isMatch) throw new Error("Invalid email or password");
  
  if (!process.env.JWT_SECRET) {
  throw new Error("Server configuration error");
}
  const token = jwt.sign(
  { id: user.id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);
  return {user , token}

}