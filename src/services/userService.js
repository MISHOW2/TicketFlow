//services/userServices.js

import bcrypt from 'bcrypt';
import * as userRepository from '../repositories/userRepository.js';

export async function registerUser({ name, email, department, password, rePassword }) {
  const existingUser = await userRepository.getUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already registered");
  }
  //validate password 
  if (password !== rePassword ) throw new Error("password do not match");
  const hashedPassword = await bcrypt.hash(password, 10);

  return await userRepository.createUser({
    name,
    email,
    department,
    password: hashedPassword
  });
}

export async function login({ }) {
  //
}