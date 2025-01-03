import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSettings } from '../../types';

const initialState: UserSettings = {
  notifications: true,
  soundEnabled: true,
  pomodoro: {
    workDuration: 25,
    breakDuration: 5,
    longBreakDuration: 15,
    sessionsBeforeLongBreak: 4
  },
  theme: 'light'
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings: (state, action: PayloadAction<Partial<UserSettings>>) => {
      return { ...state, ...action.payload };
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    updatePomodoroSettings: (state, action: PayloadAction<Partial<UserSettings['pomodoro']>>) => {
      state.pomodoro = { ...state.pomodoro, ...action.payload };
    }
  }
});

export const { updateSettings, toggleTheme, updatePomodoroSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
