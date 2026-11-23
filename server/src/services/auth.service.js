import pool from "#config/db.js";

export const findUserByEmail = async (email) => {
  const [users] = await pool.query(
    `
      SELECT * FROM users WHERE email = ? LIMIT 1
    `,
    [email],
  );

  return users[0] || null;
};

export const findUserById = async (id) => {
  const [result] = await pool.execute(
    `
      SELECT * FROM users WHERE id = ?
    `,
    [id],
  );

  return result[0] || null;
};

export const createUser = async ({ display_name, email, password, role }) => {
  const [user] = await pool.execute(
    `
      INSERT INTO users (display_name, email, password, role)
      VALUES (?, ?, ?, ?)
    `,
    [display_name, email, password, role],
  );

  return user.insertId;
};
