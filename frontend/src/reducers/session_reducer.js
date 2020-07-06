import { 
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

const _defaultState = {
  isAuthenticated: false,
  user: {}
};

export default (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return _defaultState;
    default:
      return state;
  }
};