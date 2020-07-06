import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import sessionReducer from './session_reducer';

export default combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  session: sessionReducer
});