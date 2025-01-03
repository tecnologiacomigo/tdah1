import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, Container, Box } from '@mui/material';
import { store } from './store';
import TaskList from './components/TaskList/TaskList';
import PomodoroTimer from './components/Pomodoro/PomodoroTimer';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <PomodoroTimer />
          <Box sx={{ mt: 4 }}>
            <TaskList />
          </Box>
        </Box>
      </Container>
    </Provider>
  );
}

export default App;
