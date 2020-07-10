// Util functions for rewards
// rewards are nested in the user document schema, but we have separated
// their axios requests here for clarity

import axios from "axios";

export const createReward = (reward) => (
    axios.post("/api/rewards/", reward)
);

export const editReward = (reward) => (
    axios.patch(`/api/rewards/${reward._id}`,reward)
)

export const deleteReward = (id) => (
    axios.delete(`/api/rewards/${id}`)
)



