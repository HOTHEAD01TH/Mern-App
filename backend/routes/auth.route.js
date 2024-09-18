const express = require('express');
const {  signin, signup , google } = require('../controller/auth.controller.js');

const router = express.Router();

// Use the signup function from the controller
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);

module.exports = router;
