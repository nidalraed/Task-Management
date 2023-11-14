// components/Task.js
import React, { useState } from 'react';

const Task = ({ task, markAsCompleted, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    editTask(editedTask);
    setEditedTask({ ...task });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedTask({ ...task });
  };

  const handleInputChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleMarkAsCompleted = () => {
    if (!task.completed) {
      markAsCompleted(task.id);
    }
  };

  const handleDeleteTask = () => {
    setIsDeleteConfirmationOpen(true);
  };

  const confirmDeleteTask = () => {
    deleteTask(task.id);
    setIsDeleteConfirmationOpen(false);
  };

  const cancelDeleteTask = () => {
    setIsDeleteConfirmationOpen(false);
  };

  return (
    <div className={`bg-${task.completed ? 'green-200' : 'white'} p-4 border rounded-md shadow-md ${task.completed ? 'opacity-75' : ''}`}>
      <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
      <p className="text-sm mb-2">{task.description}</p>
      <p className="text-sm mb-2">Due Date: {task.dueDate}</p>
      <p className="text-sm mb-2">Priority: {task.priority}</p>
      <p className="text-sm mb-2">Status: {task.completed ? 'Completed' : 'Pending'}</p>

      <div className="flex space-x-2">
        <button
          onClick={handleMarkAsCompleted}
          className={`bg-green-500 text-white px-3 py-1 rounded ${task.completed && 'opacity-50 cursor-not-allowed'}`}
          disabled={task.completed}
        >
          Mark as Completed
        </button>
        <button
          onClick={handleDeleteTask}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
        <button
          onClick={handleEditClick}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
      </div>

      {isDeleteConfirmationOpen && (
        <div className="delete-confirmation mt-2">
          <p>Are you sure you want to delete this task?</p>
          <button onClick={confirmDeleteTask} className="bg-red-500 text-white px-3 py-1 rounded mr-2">
            Yes
          </button>
          <button onClick={cancelDeleteTask} className="bg-gray-500 text-white px-3 py-1 rounded">
            No
          </button>
        </div>
      )}

      {isEditing && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Edit Task</h2>
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          <label className="block mb-1">Description:</label>
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md mb-2"
          ></textarea>
          <label className="block mb-1">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          <label className="block mb-1">Priority:</label>
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md mb-4"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <div className="flex justify-end">
            <button onClick={handleSaveClick} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
              Save
            </button>
            <button onClick={handleCancelClick} className="bg-gray-500 text-white px-3 py-1 rounded">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
