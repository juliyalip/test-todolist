import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../types';

const local = window.localStorage.getItem('todos') ?? '';

const initialState: ITodo[] = local ? JSON.parse(local) : [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },
    removeTodo: (state, { payload }) => {
      return state.filter(todo => todo.id !== payload);
    },
    complitedTodo: (state, { payload }) => {
      return state.map(todo => {
        if (todo.id === payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    },
    removeAllComplited: state => {
      return state.filter(todo => todo.done === false);
    },
  },
});

export const { addTodo, removeTodo, complitedTodo, removeAllComplited } =
  todosSlice.actions;
export default todosSlice.reducer;
