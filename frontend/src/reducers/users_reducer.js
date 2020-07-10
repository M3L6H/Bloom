import { 
  RECEIVE_USER
} from '../actions/users_actions';

import { REMOVE_HABIT } from '../actions/habits_actions';
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

export default (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case REMOVE_HABIT:
    case RECEIVE_USER:
      return { ...state, [action.user._id]: action.user };
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
};