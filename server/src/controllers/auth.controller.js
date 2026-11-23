import bcrypt from "bcrypt";

import { asyncHandler } from "#utils/asyncHandler.js";
import { createUser, findUserByEmail, findUserById } from "#services/auth.service.js";

export const register = asyncHandler(async (req, res) => {
  const { display_name, email, password, role } = req.body;

  const emailExists = await findUserByEmail(email);

  if (emailExists) {
    return res.status(409).json({
      success: false,
      message: "Email is already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await createUser({
    display_name,
    email,
    password: hashedPassword,
    role,
  });

  const user = await findUserById(newUser);

  return res.status(201).json({
    success: true,
    message: "User registred successfully",
    user,
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(409).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return res.status(409).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  delete user.password;

  return res.status(200).json({
    success: true,
    message: "User login successfully",
    user,
  });
});
