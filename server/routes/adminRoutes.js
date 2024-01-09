const express = require("express");
const router = express.Router();
const {
  authenticateJwt,
  generateJwt,
} = require("../middleware/authenticationMiddleware");
const db = require("../config/databaseConfig");

router.post("/signup", (req, res) => {
  const admin = req.body;
  db.query(
    "INSERT INTO admins (username, password) VALUES (?, ?)",
    [admin.username, admin.password],
    (err, result) => {
      if (err) {
        console.error("Error inserting admin into the database:", err);
        res.status(500).json({ message: "Internal server error" });
      } else {
        const token = generateJwt(admin);
        res.json({ message: "Admin created successfully", token });
      }
    }
  );
});

// POST: Admin Login
// POST: Admin Login
router.post("/login", (req, res) => {
  const { username, password } = req.body; // Change from req.headers to req.body

  // Add validation for missing username or password
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  db.query(
    "SELECT * FROM admins WHERE username = ? AND password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        console.error("Error querying the database:", err);
        res.status(500).json({ message: "Internal server error" });
      } else if (results.length > 0) {
        const token = generateJwt(results[0]);
        res.json({ message: "Logged in successfully", token });
      } else {
        res.status(403).json({ message: "Admin authentication failed" });
      }
    }
  );
});



// POST: Create a project
router.post("/projects", authenticateJwt, (req, res) => {
  const { title, description, price, image_link, published,zip_path } = req.body;
  if (!title || !description || !price) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  db.query(
    "INSERT INTO project (title, description, price , image_link, zip_path, published) VALUES (?, ?, ?, ?, ?, ?)",
    [title, description, price, image_link,zip_path, published],
    (err, result) => {
      if (err) {
        console.error("Error inserting project into the database:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.json({ message: "Project created successfully" });
    }
  );
});

// GET: Get all projects
router.get("/projects", authenticateJwt, (req, res) => {
  db.query("SELECT * FROM project", (err, results) => {
    if (err) {
      console.error("Error retrieving projects from the database:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.json({ projects: results });
  });
});

// GET: Get a project by ID
router.get("/projects/:projectId", authenticateJwt, (req, res) => {
  const id = req.params.projectId;

  db.query("SELECT * FROM project WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error retrieving the project from the database:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json({ project: results[0] });
  });
});

// DELETE: Delete a project by ID
router.delete("/projects/:projectId", authenticateJwt, (req, res) => {
  const id = req.params.projectId;

  db.query("DELETE FROM project WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting project from the database:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project deleted successfully" });
  });
});

//Get all users
router.get("/getAllUser", authenticateJwt, (req, res) => {
  db.query("SELECT * FROM users", (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      return res.status(500).send("Internal Server Error");
    }
    res.json(results);
  });
});

module.exports = router;
