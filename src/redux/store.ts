import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos-slice';
import filterReducer from './filter-slice';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
