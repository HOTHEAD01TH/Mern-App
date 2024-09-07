const User = require('../models/user.model.js');
const bcryptjs = require('bcryptjs');

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

module.exports = { signup };
