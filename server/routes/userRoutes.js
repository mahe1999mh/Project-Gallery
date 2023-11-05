const express = require('express');
const router = express.Router();
const { authenticateJwt,generateJwt  } = require('../middleware/authenticationMiddleware');
const db = require('../config/databaseConfig');

router.post('/signup', (req, res) => {
    const users = req.body;
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [users.username, users.password], (err, result) => {
      if (err) {
        console.error('Error inserting admin into the database:', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        const token = generateJwt(users);
        res.json({ message: 'Users created successfully', token });
      }
    });
  });

// POST: User Login
router.post('/login', (req, res) => {
    const { username, password } = req.headers;
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.length > 0) {
        const token = generateJwt(results[0]);
        res.json({ message: 'Logged in successfully', token });
      } else {
        res.status(403).json({ message: 'User authentication failed' });
      }
    });
});

module.exports = router;