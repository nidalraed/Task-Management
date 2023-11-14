// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../src/components/TaskList';
import TaskForm from '../src/components/TaskForm';
import { fetchTasks, addTask, toggleTask, deleteTask, editTask } from '../src/actions/taskActions';

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

  const handleEditTask = (editedTask) => {
    dispatch(editTask(editedTask));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Task Manager</h1>
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      <TaskForm addTask={handleAddTask} />
      <TaskList tasks={tasks} markAsCompleted={handleToggleTask} deleteTask={handleDeleteTask} editTask={handleEditTask} />
    </div>
  );
};

export default App;
