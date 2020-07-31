import * as APIUtil from '../util/habits_util';

export const RECEIVE_HABITS = "RECEIVE_HABITS";
export const RECEIVE_HABIT = "RECEIVE_HABIT";
export const REMOVE_HABIT = "REMOVE_HABIT";
export const RECEIVE_HABIT_ERRORS = "RECEIVE_HABIT_ERRORS";

const receiveHabits = (data) => {
    const habits = {};
    const tasks = {};

    data.forEach(({ tasks: habitTasks, ...habit }) => {
        habits[habit._id] = habit;
        habitTasks.forEach(task => {
            tasks[task._id] = task;
        });
    });

    return {
        type: RECEIVE_HABITS,
        habits,
        tasks
    };
};

const receiveHabit = ({ tasks: habitTasks, ...habit }) => {
    const tasks = {};

    habitTasks.forEach(task => {
        tasks[task._id] = task;
    });

    return {
        type: RECEIVE_HABIT,
        habit,
        tasks
    };
};

const removeHabit = ({ id, user }) => ({
    type: REMOVE_HABIT,
    id,
    user
});

const receiveHabitErrors = (errors) => ({
    type: RECEIVE_HABIT_ERRORS,
    errors
});

export const fetchHabits = () => dispatch => (
    APIUtil.fetchHabits()
        .then(res => dispatch(receiveHabits(res.data)))
        .catch(err => dispatch(receiveHabitErrors(err.response.data)))
);

export const createHabit = (habit) => dispatch => (
    APIUtil.createHabit(habit)
        .then(res => dispatch(receiveHabit(res.data)))
        .catch(err => dispatch(receiveHabitErrors(err.response.data)))
);

export const fetchHabit = (id) => dispatch => (
    APIUtil.fetchHabit(id)
        .then(res => dispatch(receiveHabit(res.data)))
        .catch(err => dispatch(receiveHabitErrors(err.response.data)))
);

export const updateHabit = (habit) => dispatch => (
    APIUtil.updateHabit(habit)
        .then(res => dispatch(receiveHabit(res.data)))
        .catch(err => dispatch(receiveHabitErrors(err.response.data)))
);


export const deleteHabit = (id) => dispatch => (
    APIUtil.deleteHabit(id)
        .then(res => dispatch(removeHabit(res.data)))
        .catch(err => dispatch(receiveHabitErrors(err.response.data)))
);
