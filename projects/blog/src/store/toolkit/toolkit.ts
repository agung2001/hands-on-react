import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from '../reducers/tasksReducer';

/**
 * The store is the central state management for the application.
 * It is used to store the state of the application.
 * It is used to dispatch actions to the reducers.
 * It is used to get the state of the application.
 */
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

/**
 * The RootState is the type of the state of the application.
 * It is used to get the state of the application.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
