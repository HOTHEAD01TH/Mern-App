const express = require('express');
const router = express.Router();

// Test Route for "/api/user"
router.get('/', (req, res) => {
  res.json({
    message: 'User API is working!',
  });
});

module.exports = router;
