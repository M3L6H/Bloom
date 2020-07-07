import axios from 'axios'; 

export const getUserHabits = () => {
    return axios.get(`/api/user/habits/`)
}

export const getHabit = (id) => {
    return axios.get(`/api/user/habits/${id}`)
}

export const writeHabit = (data) => {
    return axios.post('/api/user/habits', data)
}