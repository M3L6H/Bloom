import { RECEIVE_SPAWN_FIREWORKS } from '../actions/fireworks_actions';

export default (state=null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SPAWN_FIREWORKS:
      return action.fn;
    default:
      return state;
  }
};