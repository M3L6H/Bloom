import { combineReducers } from 'redux';
import fireworksReducer from './fireworks_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
  spawnFireworks: fireworksReducer,
  modal: modalReducer
});