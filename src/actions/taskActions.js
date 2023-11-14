// actions/taskActions.js
import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

export const fetchTasksSuccess = (tasks) => ({
  type: actionTypes.FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const addTaskSuccess = (task) => ({
  type: actionTypes.ADD_TASK_SUCCESS,
  payload: task,
});

export const toggleTaskSuccess = (task) => ({
  type: actionTypes.TOGGLE_TASK_SUCCESS,
  payload: task,
});

export const deleteTaskSuccess = (taskId) => ({
  type: actionTypes.DELETE_TASK_SUCCESS,
  payload: taskId,
});

export const editTaskSuccess = (task) => ({
  type: actionTypes.EDIT_TASK_SUCCESS,
  payload: task,
});

export const fetchTasksFailure = (error) => ({
  type: actionTypes.FETCH_TASKS_FAILURE,
  payload: error,
});

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/tasks');
    dispatch(fetchTasksSuccess(response.data));
  } catch (error) {
    console.error('Error fetching tasks:', error);
    dispatch(fetchTasksFailure(error.message));
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/tasks', taskData);
    dispatch(addTaskSuccess(response.data));
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

export const toggleTask = (taskId) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/tasks/${taskId}`);
    dispatch(toggleTaskSuccess(response.data));
  } catch (error) {
    console.error('Error toggling task:', error);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/tasks/${taskId}`);
    dispatch(deleteTaskSuccess(taskId));
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

export const editTask = (editedTask) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/tasks/${editedTask.id}`, editedTask);
    dispatch(editTaskSuccess(response.data));
  } catch (error) {
    console.error('Error editing task:', error);
  }
};
