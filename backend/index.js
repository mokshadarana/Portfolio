const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user-login'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    db.query(sql, (err, result) => {
      if (err) {
        throw err;
;
      }
      if (result.length > 0) {
        res.json({ success: true, message: 'Login successful', user: result[0] });
      } else {
        res.json({ success: false, message: 'Invalid email or password' });
      }
    });
  });
  
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  const sql = `SELECT * FROM users WHERE email = '${email}'`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      res.json({ success: false, message: 'User already exists' });
    } else {
      const insertSql = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
      
      db.query(insertSql, (insertErr, insertResult) => {
        if (insertErr) {
          throw insertErr;
        }
        res.json({ success: true, message: 'Signup successful' });
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
