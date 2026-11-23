import { Router } from "express";

import { login, register } from "#controllers/auth.controller.js";
import { loginValidator, registerValidator } from "#validator/auth.validator.js";
import { validate } from "#validator/validate.js";

const router = Router();

router.post("/register", registerValidator, validate, register);

router.post("/login", loginValidator, validate, login);

export default router;
