


const express = require('express');
const { signup } = require('../controller/user.controller.js'); // Make sure signup is imported

const router = express.Router();

// Define the POST route for signup
router.post('/signup', signup);


module.exports = router;

