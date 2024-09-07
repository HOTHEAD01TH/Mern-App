const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Load environment variables
const cors = require('cors'); // Import CORS
const userRoutes = require('./routes/user.route.js'); // Import the routes
const authRoutes = require('./routes/auth.route.js'); 

dotenv.config(); // Load environment variables from .env file

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use CORS middleware
app.use(cors());

// Routes
app.use("/api/user", userRoutes);
app.use('/api/auth', authRoutes); // Use the user routes under "/api/user"

// Root Route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Fallback route for undefined paths
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
