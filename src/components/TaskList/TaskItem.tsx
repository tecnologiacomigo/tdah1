import React from 'react';
import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Chip,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { Task } from '../../types';
import { deleteTask, updateTask } from '../../store/slices/tasksSlice';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <ListItem
      secondaryAction={
        <Box>
          <IconButton edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      }
    >
      <Checkbox
        edge="start"
        checked={task.completed}
        onChange={handleToggleComplete}
      />
      <ListItemText
        primary={task.title}
        secondary={
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <Chip
              label={task.priority}
              color={
                task.priority === 'high'
                  ? 'error'
                  : task.priority === 'medium'
                  ? 'warning'
                  : 'success'
              }
              size="small"
            />
            <Chip
              label={`${task.timeEstimate} min`}
              variant="outlined"
              size="small"
            />
          </Box>
        }
        sx={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      />
    </ListItem>
  );
};

export default TaskItem;
