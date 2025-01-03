export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  timeEstimate: number;
  completed: boolean;
  steps: string[];
  category: string;
  dueDate?: Date;
  createdAt: Date;
}

export interface PomodoroSettings {
  workDuration: number;
  breakDuration: number;
  longBreakDuration: number;
  sessionsBeforeLongBreak: number;
}

export interface UserSettings {
  notifications: boolean;
  soundEnabled: boolean;
  pomodoro: PomodoroSettings;
  theme: 'light' | 'dark';
}
