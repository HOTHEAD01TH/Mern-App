const express = require('express');
const {  signin, signup } = require('../controller/auth.controller.js');

const router = express.Router();

// Use the signup function from the controller
router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;
