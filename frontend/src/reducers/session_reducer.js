import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const _defaultState = {
  isAuthenticated: false,
  user: {}
};

export default (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return _defaultState;
    default:
      return state;
  }
};