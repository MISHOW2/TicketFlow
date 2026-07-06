// controllers/authControllers.js

import * as userService from "../services/userService.js";

export const register = async (req, res) => {
  try {
    await userService.registerUser(req.body);

    res.status(201).json({
      message: "User registered",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const {user , token} = await userService.userLogin(req.body);

    const { password, ...safeUser } = user;

    res.status(200).json({
      message: "Login successful",
      user: safeUser,
      token: token
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};