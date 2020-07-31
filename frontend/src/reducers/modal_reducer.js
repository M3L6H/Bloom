import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_USER } from "../actions/users_actions";
import { RECEIVE_HABIT } from "../actions/habits_actions";
const modalReducer = (state = null, action) => {
    switch(action.type){
        case OPEN_MODAL:
            return action;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_USER:
            return null;
        default:
            return state;
    }
};

export default modalReducer;