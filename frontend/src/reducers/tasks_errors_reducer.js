import { 
  RECEIVE_TASK,
  REMOVE_TASK,
  RECEIVE_TASK_ERRORS,
  RECEIVE_TASKS
} from '../actions/tasks_actions';

const _defaultState = {};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK_ERRORS:
      return action.errors;
    case RECEIVE_TASK:
    case RECEIVE_TASKS:
    case REMOVE_TASK:
      return _defaultState;
    default:
      return state;
  }
};
