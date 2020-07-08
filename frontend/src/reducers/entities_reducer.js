import { combineReducers } from 'redux';

import habitsReducer from './habits_reducer';
import tasksReducer from './tasks_reducer';

export default combineReducers({
  habits: habitsReducer,
  tasks: tasksReducer
});