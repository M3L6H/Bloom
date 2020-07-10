import axios from 'axios';

export const fetchUser = () => (
  axios.get(`/api/users`)
);

export const updatePetals = (petals) => (
  axios.patch(`/api/users/update_petals`, { petals })
);

export const updateDailyTaskList = (dailyTaskList) => (
  axios.patch(`/api/users/update_daily_task_list`, { dailyTaskList })
)

export const sortDailyTaskList = () => {
  axios.patch(`/api/users/reorganize_tasks`)
}

export const updateHabitList = (habitList) => {
  axios.patch(`/api/users/update_habit_list`, habitList)
}



