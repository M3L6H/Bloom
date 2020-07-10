import { 
  RECEIVE_HABITS,
  RECEIVE_HABIT,
  REMOVE_HABIT
} from '../actions/habits_actions';
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

export default (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_HABITS:
      return action.habits;
    case RECEIVE_HABIT:
      return { ...state, [action.habit._id]: action.habit };
    case REMOVE_HABIT:
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
};