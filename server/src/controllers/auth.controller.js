import bcrypt from "bcrypt";

import { createUser, findUserByEmail, findUserById } from "#services/auth.service.js";

export const register = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
