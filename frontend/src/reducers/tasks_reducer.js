import { 
  RECEIVE_HABITS,
  RECEIVE_HABIT,
  REMOVE_HABIT
} from '../actions/habits_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_HABITS:
      return action.tasks;
    case RECEIVE_HABIT:
      return { ...state, ...action.tasks };
    case REMOVE_HABIT:
      const newState = Object.assign({}, state);
      
      for (const id in state) {
        if (state[id].habit != action.id) {
          newState[id] = state[id];
        }
      }

      return newState;
    default:
      return state;
  }
};