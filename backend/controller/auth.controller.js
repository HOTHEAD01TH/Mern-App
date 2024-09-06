const express = require('express');
const router = express.Router();

const signup = (req, res) => {
    console.log(req.body);
};

// Export using module.exports for CommonJS
module.exports = {
    signup,
    router
};
