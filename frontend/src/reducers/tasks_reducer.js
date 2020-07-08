import { 
  RECEIVE_HABITS,
  RECEIVE_HABIT,
  REMOVE_HABIT
} from '../actions/habits_actions';

import { 
  RECEIVE_TASK,
  REMOVE_TASK
} from '../actions/tasks_actions';

export default (state={}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_TASK:
      return { ...state, [action.task._id]: action.task };
    case REMOVE_TASK:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    case RECEIVE_HABITS:
      return action.tasks;
    case RECEIVE_HABIT:
      return { ...state, ...action.tasks };
    case REMOVE_HABIT:
      newState = {};

      for (const id in state) {
        // Using != here is necessary (i think) b/c one comes back as an object
        // while the other is a string
        // eslint-disable-next-line
        if (state[id].habit != action.id) {
          newState[id] = state[id];
        }
      }

      return newState;
    default:
      return state;
  }
};