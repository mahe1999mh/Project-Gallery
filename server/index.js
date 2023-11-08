const express = require('express');
const db = require('./config/databaseConfig');
const app = express();
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const userPurchasedRoutes = require('./routes/userPurchasedRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/purchased', userPurchasedRoutes);

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});


