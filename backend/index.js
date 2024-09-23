import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import todoRoutes from './routes/todo.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

// Serve static files from the React app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// The "catchall" handler: for any request that doesn't match one above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend',  'index.html'));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  console.error('Error:', err);
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});