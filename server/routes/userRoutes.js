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
  db.query('SELECT * FROM project WHERE published = 1', (err, results) => {
    if (err) {
      console.error('Error retrieving projects from the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ projects: results });
  });
});


router.get('/projects/:projectId', (req, res) => {
  const id = req.params.projectId;

  db.query('SELECT * FROM project WHERE id = ? AND published = 1', [id], (err, results) => {
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

router.get('/purchasedcourses/', async (req, res) => {
  // const user_id = req.params.user_id;

  const sqlQuery = `
    SELECT Project.id, Project.title, Project.description, Project.price
    FROM Project
    INNER JOIN user_purchased_Project ON Project.id = user_purchased_Project.Project_id
    WHERE user_purchased_Project.user_id = 1;
  `;

  try {
    const results = await db.query(sqlQuery);

    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;