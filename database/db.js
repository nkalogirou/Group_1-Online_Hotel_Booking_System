const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/hotel.db", (err) => {
  if (err) console.error("Database error:", err.message);
  else console.log("Connected to SQLite database.");
});


db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT UNIQUE,
  password TEXT
)`);

db.run(`CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  room_id INTEGER NOT NULL,
  check_in TEXT NOT NULL,
  check_out TEXT NOT NULL,
  total_price REAL NOT NULL,
  status TEXT DEFAULT 'confirmed',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

db.run(`ALTER TABLE users ADD COLUMN verified INTEGER DEFAULT 0`, (err) => {});


module.exports = db;
