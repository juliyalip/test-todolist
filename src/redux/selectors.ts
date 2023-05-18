import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const getTodos = (state: RootState) => state.todos;

export const getFilter = (state: RootState) => state.filter.toLowerCase();

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizeFilter),
    );
  },
);