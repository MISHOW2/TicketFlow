//repositories/userRepositories
import { users } from "../data/users.js";

export function getUserByEmail(email) {
  return users.find(u => u.email === email);
}

export function createUser({ name, email, department, password }) {
  const newUser = {
    id: users.length + 1,
    name,
    email,
    department,
    password,
    role: "user",
    createdAt: new Date().toISOString()
  };
  users.push(newUser);
  return newUser;
}

