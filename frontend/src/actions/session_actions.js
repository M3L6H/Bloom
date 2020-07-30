import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveUserLogout = () => ({
  type: RECEIVE_USER_LOGOUT
});

const parseUser = ({ token }) => {
  localStorage.setItem("jwtToken", token);
  APIUtil.setAuthToken(token);
  return jwt_decode(token);
};

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(res => {
    dispatch(receiveCurrentUser(parseUser(res.data)));
  })
  .catch(err => {
    dispatch(receiveSessionErrors(err.response.data));
  })
};

export const login = user => dispatch => (
  APIUtil.login(user).then(res => {
    dispatch(receiveCurrentUser(parseUser(res.data)));
  })
  .catch(err => { ;
    dispatch(receiveSessionErrors(err.response.data));
  })
);

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(receiveUserLogout());
};

export const demoLogin = () => (dispatch) => (
  APIUtil.login({password: "password", email: "demouser@aa.io"})
    .then((res) => {
      dispatch(receiveCurrentUser(parseUser(res.data)));
    })
    .catch((err) => {
      dispatch(receiveSessionErrors(err.response.data));
    })
);