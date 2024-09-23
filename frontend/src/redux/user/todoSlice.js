import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('/api/todos'); // Ensure this endpoint is correct
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch todos');
  }
  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error('Received data is not an array');
  }
  return data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to add todo');
  }
  return response.json();
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo) => {
  const response = await fetch(`/api/todos/${todo._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update todo');
  }
  return response.json();
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  const response = await fetch(`/api/todos/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to delete todo');
  }
  return id;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((todo) => todo._id === action.payload._id);
        state.todos[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;