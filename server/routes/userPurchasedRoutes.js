const express = require('express');
const router = express.Router();
const db = require('../config/databaseConfig');
// const { authenticateJwt,generateJwt  } = require('../middleware/authenticationMiddleware');

router.get('/purchasedproject/:user_id', async (req, res) => {
    const user_id = req.params.user_id;
    const sqlQuery = `
      SELECT Project.id, Project.title, Project.description, Project.price
      FROM Project
      INNER JOIN user_purchased_Project ON Project.id = user_purchased_Project.Project_id
      WHERE user_purchased_Project.user_id = ?;
    `;
  
    try {
      const results = await db.promise().query(sqlQuery,[user_id]);
      res.status(200).json(results[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;