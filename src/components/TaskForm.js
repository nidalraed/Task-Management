// components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'low',
  });

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskData);
    setTaskData({
      title: '',
      description: '',
      dueDate: '',
      priority: 'low',
    });
  };

  return (
    <section className="mb-6">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Title:</label>
        <input type="text" name="title" value={taskData.title} onChange={handleChange} className="w-full p-2 border rounded-md mb-2" />

        <label className="block mb-2">Description:</label>
        <textarea name="description" value={taskData.description} onChange={handleChange} className="w-full p-2 border rounded-md mb-2"></textarea>

        <label className="block mb-2">Due Date:</label>
        <input type="date" name="dueDate" value={taskData.dueDate} onChange={handleChange} className="w-full p-2 border rounded-md mb-2" />

        <label className="block mb-2">Priority:</label>
        <select name="priority" value={taskData.priority} onChange={handleChange} className="w-full p-2 border rounded-md mb-4">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Task
        </button>
      </form>
    </section>
  );
};

export default TaskForm;
