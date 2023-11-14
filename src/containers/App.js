import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, toggleTask, deleteTask } from '../actions/taskActions';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import './App.css'; // Import the CSS file


const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = (taskData) => {
    dispatch(addTask(taskData));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      {error && <p>Error: {error}</p>}
      <TaskForm addTask={handleAddTask} />
      <TaskList tasks={tasks} markAsCompleted={handleToggleTask} deleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;