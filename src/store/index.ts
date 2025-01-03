import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import settingsReducer from './slices/settingsSlice';
import pomodoroReducer from './slices/pomodoroSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    settings: settingsReducer,
    pomodoro: pomodoroReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
