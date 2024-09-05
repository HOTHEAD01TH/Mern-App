const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Change import to require

dotenv.config(); // Load environment variables from .env file

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('connected to mongo');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log('server is running....');
});
