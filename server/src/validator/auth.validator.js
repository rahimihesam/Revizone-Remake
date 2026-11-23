import { body } from "express-validator";

export const registerValidator = [
  body("display_name")
    .exists({ checkFalsy: true })
    .withMessage("Display name is required")
    .bail()
    .isString()
    .withMessage("Display name must be a string")
    .bail()
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage("Display name must be between 3 and 30 characters"),

  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Eamil is required")
    .bail()
    .isString()
    .withMessage("Email must be a string")
    .bail()
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Email must be a valid email"),

  body("password")
    .exists({ checkFalsy: true })
    .withMessage("Password is required")
    .bail()
    .isString()
    .withMessage("Password must be a string")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("role")
    .exists({ checkFalsy: true })
    .isIn(["user", "critic_movie", "critic_series", "critic_game"])
    .withMessage("Role must be one of: user, critic_movie, critic_series, critic_game"),
];

export const loginValidator = [
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Eamil is required")
    .bail()
    .isString()
    .withMessage("Email must be a string")
    .bail()
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Email must be a valid email"),

  body("password")
    .exists({ checkFalsy: true })
    .withMessage("Password is required")
    .bail()
    .isString()
    .withMessage("Password must be a string")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];
