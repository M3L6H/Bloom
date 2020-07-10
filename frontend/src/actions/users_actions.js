import * as APIUtil from '../util/users_util';
import {receiveTaskErrors} from "./tasks_actions"
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchUser = () => dispatch => (
  APIUtil.fetchUser()
    .then(res => dispatch(receiveUser(res.data)))
    .catch(err => dispatch(receiveUserErrors(err.response.data)))
);

export const updatePetals = (petals) => dispatch => (
  APIUtil.updatePetals(petals)
    .then(res => dispatch(receiveUser(res.data)))
    .catch(err => dispatch(receiveUserErrors(err.response.data)))
);

export const updateDailyTaskList = (dailyTaskList) => dispatch => (
  APIUtil.updateDailyTaskList(dailyTaskList)
    .then(res => dispatch(receiveUser(res.data)))
    .catch(err => dispatch(receiveTaskErrors(err.response.data)))
);

export const sortDailyTaskList = () => dispatch => (
  APIUtil.sortDailyTaskList()
    .then(res => dispatch(receiveUser(res.data)))
    .catch(err => dispatch(receiveTaskErrors(err.response.data)))
);
