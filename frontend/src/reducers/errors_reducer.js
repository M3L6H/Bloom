import { combineReducers } from 'redux';

import habitsErrorsReducer from './habits_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import tasksErrorsReducer from './tasks_errors_reducer';

export default combineReducers({
  habits: habitsErrorsReducer,
  session: sessionErrorsReducer,
  tasks: tasksErrorsReducer
});