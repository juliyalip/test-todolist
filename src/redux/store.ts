import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todosReducer from './todos-slice';


const persistConfig = {
  key: 'persistTodos',
  storage,
}


const rootReducer = combineReducers({
  todos: todosReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer) 





 const store = configureStore({
  reducer: persistedReducer,
   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
     serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
     }
  }),]

});



export const persistor = persistStore(store)
export default store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>