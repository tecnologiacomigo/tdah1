import React from 'react';
import { useSelector } from 'react-redux';
import { Box, List } from '@mui/material';
import TaskItem from './TaskItem';
import { RootState } from '../../store';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
      <List>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
