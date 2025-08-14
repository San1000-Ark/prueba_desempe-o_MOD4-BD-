import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

// create a pool with more connections
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port:process.env.PORT_DB,
  waitForConnections: true,
  connectionLimit: 10, // simultaneous connections allowed
  queueLimit: 0
});

//verification initial connection
pool.getConnection((err, conn) => {
  if (err) {
    console.error('Error to connect MySQL:', err.message);
  } else {
    console.log('Connected to MySQL');
    conn.release(); // free connection
  }
});

export default pool;
