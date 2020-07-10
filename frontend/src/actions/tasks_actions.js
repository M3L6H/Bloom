import * as APIUtil from '../util/tasks_util';

export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";
export const RECEIVE_TASKS = "RECEIVE_TASKS";

const receiveTask = (task) => {
    return {
        type: RECEIVE_TASK,
        task
    };
};

const removeTask = (id) => ({
    type: REMOVE_TASK,
    id
});

export const receiveTaskErrors = (errors) => ({
    type: RECEIVE_TASK_ERRORS,
    errors
});

export const createTask = (task) => dispatch => {
    return(
    APIUtil.createTask(task)
        .then(res => dispatch(receiveTask(res.data)))
        .catch(err => dispatch(receiveTaskErrors(err.response.data)))
)}

export const updateTask = (task) => dispatch => (
    APIUtil.updateTask(task)
        .then(res => dispatch(receiveTask(res.data)))
        .catch(err => dispatch(receiveTaskErrors(err.response.data)))
);

export const deleteTask = (id) => dispatch =>  (
    APIUtil.deleteTask(id)
        .then(res => dispatch(removeTask(res.data._id)))
        .catch(err => dispatch(receiveTaskErrors(err.response.data)))
)

