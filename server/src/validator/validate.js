import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      errors: errors.array().map((error) => {
        return {
          field: error.path,
          message: error.msg,
        };
      }),
    });
  }

  next();
};
