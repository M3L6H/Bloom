import axios from 'axios';

export const createTask = (task) => (
  axios.post(`/api/habits/${ task.habit }/tasks`, task)
);

export const deleteTask = (id) => (
  axios.delete(`/api/tasks/${ id }`)
);

export const updateTask = (task) => (
  axios.patch(`/api/tasks/${ task._id }`, task)
);
