// components/TaskList.js
import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, markAsCompleted, deleteTask, editTask }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCompleted, setFilterCompleted] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    const titleMatch = task && task.title && task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const statusMatch =
      filterCompleted === 'all' || (filterCompleted === 'completed' && task && task.completed) || (filterCompleted === 'pending' && task && !task.completed);

    return titleMatch && statusMatch;
  });

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2">Search:</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tasks..."
          className="p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Filter by status:</label>
        <select
          value={filterCompleted}
          onChange={(e) => setFilterCompleted(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              markAsCompleted={() => markAsCompleted(task.id)}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
