import axios from 'axios';

export const createTask = (task) => {
  return (
  axios.post(`/api/habits/${task.habit._id}/tasks`, task)
)}

export const deleteTask = (id) => (
  axios.delete(`/api/tasks/${id}`)
);

export const updateTask = (task) => (
  axios.patch(`/api/tasks/${task._id}`, task)
);
