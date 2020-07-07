import axios from 'axios';

export const createHabit = (habit) => (
  axios.post("/api/habits", habit)
);

export const fetchHabit = (id) => (
  axios.get(`/api/habits/${ id }`)
);

export const deleteHabit = (id) => (
  axios.delete(`/api/habits/${ id }`)
);

export const updateHabit = (habit) => (
  axios.patch(`/api/habits/${ habit._id }`, habit)
);

export const fetchHabits = () => (
  axios.get("/api/habits")
);