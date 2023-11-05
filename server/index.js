const express = require('express');
const db = require('./config/databaseConfig');
const app = express();
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


