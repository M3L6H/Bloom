import { 
  RECEIVE_TASK,
  REMOVE_TASK,
  RECEIVE_TASK_ERRORS
} from '../actions/tasks_actions';
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const _defaultState = {};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK_ERRORS:
      return action.errors;
    case RECEIVE_TASK:
    case REMOVE_TASK:
      return _defaultState;
    case RECEIVE_USER_LOGOUT:
      return _defaultState;
    default:
      return state;
  }
};
