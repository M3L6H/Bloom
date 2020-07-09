import { 
  RECEIVE_USER,
  RECEIVE_USER_ERRORS
} from '../actions/users_actions';

const _defaultState = [];

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_USER:
      return _defaultState;
    default:
      return state;
  }
};
