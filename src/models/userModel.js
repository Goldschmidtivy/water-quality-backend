const db = require("../config/database");

const User = {
  // Find user by email
  findByEmail: (email, callback) => {
    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], callback);
  },

  // Create a new user
  create: (userData, callback) => {
    const sql = `
      INSERT INTO users (name, email, password, role)
      VALUES (?, ?, ?, ?)
    `;

    const values = [
      userData.name,
      userData.email,
      userData.password,
      userData.role
    ];

    db.query(sql, values, callback);
  },

  // Find user by ID
  findById: (userId, callback) => {
    const sql = `
      SELECT userId, name, email, role, createdAt
      FROM users
      WHERE userId = ?
    `;

    db.query(sql, [userId], callback);
  }
};

module.exports = User;