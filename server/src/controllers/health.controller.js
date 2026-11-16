export const health = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Revizone API is running...",
  });
};

export const version = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "version 1",
  });
};
