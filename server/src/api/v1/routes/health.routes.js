import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Revisone API is running...",
  });
});

router.get("/version", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "version 1",
  });
});

export default router;
