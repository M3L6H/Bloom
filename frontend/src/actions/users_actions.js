import * as APIUtil from '../util/users_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = (errors) => ({
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