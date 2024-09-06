const express = require('express');
const { signup } = require('../controller/auth.controller.js');

const router = express.Router();

// Use the signup function from the controller
router.post('/signup', signup);

module.exports = router;
