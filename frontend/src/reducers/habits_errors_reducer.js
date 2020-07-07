import { 
  RECEIVE_HABIT,
  RECEIVE_HABITS,
  REMOVE_HABIT,
  RECEIVE_HABIT_ERRORS
} from '../actions/habits_actions';

const _defaultState = {};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HABIT_ERRORS:
      return action.errors;
    case RECEIVE_HABIT:
    case RECEIVE_HABITS:
    case REMOVE_HABIT:
      return _defaultState;
    default:
      return state;
  }
};
