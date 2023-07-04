const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

const farmerRoutes = require('./routes/farmerRoutes');

app.use('/farmer', farmerRoutes);

const URI = process.env.MONGODB_URI;
const PORT = process.env.EXPRESS_PORT


// DB connection

mongoose.connect(URI)
.then(() => {
  console.log('Connected to the database');
})
.catch((error) => {
  console.error('Database connection error:', error);
});

// Express server


const port = PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
