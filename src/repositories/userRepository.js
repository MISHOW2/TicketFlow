//repositories/userRepositories

import { users } from "../data/data.js";

export function getUserByEmail(email) {
  return users.find(u => u.email === email);
}

export function createUser(user) {
  const newUser = {
    id: users.length + 1,
    ...user,
    role: "user",
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  console.log(newUser);
  
  return newUser;
}