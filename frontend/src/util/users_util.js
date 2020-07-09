import axios from 'axios';

export const fetchUser = () => (
  axios.get(`/api/users`)
);

export const updatePetals = (petals) => (
  axios.patch(`/api/users/update_petals`, { petals })
);