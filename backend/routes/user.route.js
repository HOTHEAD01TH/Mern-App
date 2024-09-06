const express = require('express');
const { signup } = require('../controller/user.controller'); // Import signup function

const router = express.Router();

// Route for signup
router.post('/signup', signup); // Use signup as the route handler for POST requests to "/signup"

module.exports = router;
