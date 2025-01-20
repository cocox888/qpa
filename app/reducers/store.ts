import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasks'; // Adjust path as necessary

const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
});

// Get the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
