import { RECEIVE_SPAWN_FIREWORKS } from '../actions/fireworks_actions';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

export default (state=null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SPAWN_FIREWORKS:
      return action.fn;
    case RECEIVE_USER_LOGOUT:
      return null;
    default:
      return state;
  }
};