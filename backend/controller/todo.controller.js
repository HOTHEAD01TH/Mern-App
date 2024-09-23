import Todo from '../models/todo.model.js';
import { errorHandler } from '../utils/error.js';

export const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });
    res.status(200).json(todos); // This should be an array
  } catch (error) {
    console.error('Error fetching todos:', error); // Add this line
    next(error);
  }
};

export const createTodo = async (req, res, next) => {
  const newTodo = new Todo({
    userId: req.user.id,
    title: req.body.title,
  });
  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error('Error creating todo:', error); // Add this line
    next(error);
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error('Error updating todo:', error); // Add this line
    next(error);
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json('Todo has been deleted...');
  } catch (error) {
    console.error('Error deleting todo:', error); // Add this line
    next(error);
  }
};