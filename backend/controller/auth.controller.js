const User = require('../models/user.model.js');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Import jwt for signin functionality
const { errorHandler } = require('../utils/error.js'); // Import custom error handler if not already present
const dotenv = require('dotenv');

// Signup function
const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    
    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);
    
    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    
    // Save the new user to the database
    await newUser.save();
    
    // Respond with success message
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Signin function
const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }

    // Verify the password
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, 'Wrong credentials'));
    }

    // Generate JWT token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    
    // Extract password from user object
    const { password: hashedPassword, ...rest } = validUser._doc;
    
    // Set token expiry to 1 hour
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    
    // Set cookie and send response
    res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, signin };
