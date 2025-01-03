import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PomodoroState {
  isRunning: boolean;
  timeLeft: number;
  currentSession: number;
  isBreak: boolean;
}

const initialState: PomodoroState = {
  isRunning: false,
  timeLeft: 25 * 60,
  currentSession: 1,
  isBreak: false
};

const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    pauseTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.isRunning = false;
      state.timeLeft = 25 * 60;
      state.currentSession = 1;
      state.isBreak = false;
    },
    updateTimeLeft: (state, action: PayloadAction<number>) => {
      state.timeLeft = action.payload;
    },
    toggleBreak: (state) => {
      state.isBreak = !state.isBreak;
      state.timeLeft = state.isBreak ? 5 * 60 : 25 * 60;
    },
    incrementSession: (state) => {
      state.currentSession += 1;
    }
  }
});

export const {
  startTimer,
  pauseTimer,
  resetTimer,
  updateTimeLeft,
  toggleBreak,
  incrementSession
} = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
