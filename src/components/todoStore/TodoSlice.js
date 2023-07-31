import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item._id !== action.payload
      );
    },
    deleteAllTodos: (state, action) => {
      state.todoList = [];
    },
  },
});

export const { addTodo, deleteTodo, deleteAllTodos } = TodoSlice.actions;
export default TodoSlice.reducer;
