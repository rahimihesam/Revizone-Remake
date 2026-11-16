import app from "./app.js";
import pool from "#config/db.js";

const PORT = Number(process.env.PORT) || 3000;

try {
  const connection = await pool.getConnection();

  console.log("MySQL connected successfully.");
  connection.release();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.log("MySQL connection failed: ", error.message);
  process.exit(1);
}
