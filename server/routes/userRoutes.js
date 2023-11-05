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

router.get('/projects', (req, res) => {
  db.query('SELECT * FROM project', (err, results) => {
    if (err) {
      console.error('Error retrieving projects from the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ projects: results });
  });
});


router.get('/projects/:projectId', (req, res) => {
  const projectId = req.params.projectId;

  db.query('SELECT * FROM project WHERE projectid = ?', [projectId], (err, results) => {
    if (err) {
      console.error('Error retrieving the project from the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ project: results[0] });
  });
});


module.exports = router;