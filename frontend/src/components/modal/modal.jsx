import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';
import EditTaskContainer from '../task/edit_task_container';
import CreateTaskContainer from '../task/create_task_container';
import RewardsUse from '../rewards_use';

function Modal({ modal, closeModal }) {
    if (!modal) return null;

    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;  
        case 'editTask':
            component = <EditTaskContainer />;
            break;  
        case 'createTask':
            component = <CreateTaskContainer />;
            break;
        case 'userewards':
            component = <RewardsUse />;
            break;
        default:
            return null;
    }

    return(
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);
