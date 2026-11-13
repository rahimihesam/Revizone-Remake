import express from "express";

const app = express();

app.get("/api", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Api is running...",
  });
});

export default app;
