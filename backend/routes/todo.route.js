import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../controller/todo.controller.js';

const router = express.Router();

router.get('/', verifyToken, getTodos);
router.post('/', verifyToken, createTodo);
router.put('/:id', verifyToken, updateTodo);
router.delete('/:id', verifyToken, deleteTodo);

export default router;