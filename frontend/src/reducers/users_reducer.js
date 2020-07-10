import { 
  RECEIVE_USER
} from '../actions/users_actions';

import { REMOVE_HABIT } from '../actions/habits_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case REMOVE_HABIT:
    case RECEIVE_USER:
      return { ...state, [action.user._id]: action.user };
    default:
      return state;
  }
};