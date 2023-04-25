import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type {PreloadedState} from '@reduxjs/toolkit'
import todosReducer from './todos-slice';
import filterReducer from './filter-slice';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>)=>{
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>
