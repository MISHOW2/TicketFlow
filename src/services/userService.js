// services/userServices.js

import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js";

export async function registerUser({
  name,
  email,
  department,
  password,
  rePassword,
}) {
  // Validate required fields
  if (
    !name?.trim() ||
    !email?.trim() ||
    !department?.trim() ||
    !password?.trim() ||
    !rePassword?.trim()
  ) {
    throw new Error("All fields are required");
  }

  // Normalize values
  email = email.trim().toLowerCase();
  department = department.trim().toLowerCase();

  // Validate department
  const allowedDepartments = [
    "safety",
    "it",
    "finance",
    "hr",
  ];

  if (!allowedDepartments.includes(department)) {
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