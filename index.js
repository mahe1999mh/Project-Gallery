const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('./config/databaseConfig');
const app = express();
const { authenticateJwt,generateJwt } = require('./middleware/authenticationMiddleware');

app.use(express.json());

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.post('/admin/signup', (req, res) => {
  const admin = req.body;
  db.query('INSERT INTO admins (username, password) VALUES (?, ?)', [admin.username, admin.password], (err, result) => {
    if (err) {
      console.error('Error inserting admin into the database:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      const token = generateJwt(admin);
      res.json({ message: 'Admin created successfully', token });
    }
  });
});

app.post('/admin/login', (req, res) => {
  const { username, password } = req.headers;
  db.query('SELECT * FROM admins WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else if (results.length > 0) {
      const token = generateJwt(results[0]);
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Admin authentication failed' });
    }
  });
});


app.post('/admin/projects', authenticateJwt,(req, res) => {
  const { title, description, price } = req.body;
  if (!title || !description || !price) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  db.query('INSERT INTO project (title, description, price) VALUES (?, ?, ?)', [title, description, price], (err, result) => {
    if (err) {
      console.error('Error inserting project into the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ message: 'Project created successfully' });
  });
});

app.get('/admin/projects', authenticateJwt, (req, res) => {
  db.query('SELECT * FROM project', (err, results) => {
    if (err) {
      console.error('Error retrieving projects from the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ projects: results });
  });
});

app.get('/admin/projects/:projectId', authenticateJwt, (req, res) => {
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

app.delete('/admin/projects/:projectId', authenticateJwt, (req, res) => {
  const projectId = req.params.projectId;

  db.query('DELETE FROM project WHERE projectid = ?', [projectId], (err, result) => {
    if (err) {
      console.error('Error deleting project from the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  });
});



app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// 1. create
// 2. delete
// 3. get all projects
// 4. get id projects
// 5. delete  projects
