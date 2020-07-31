import { 
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  REMOVE_SESSION_ERRORS
} from '../actions/session_actions';

const _defaultState = [];

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case REMOVE_SESSION_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return _defaultState;
    default:
      return state;
  }
};
