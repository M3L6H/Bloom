import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';
import EditTaskContainer from '../task/edit_task_container';
import CreateTaskContainer from '../task/create_task_container';
import RewardsUse from '../rewards_use';
import CreateRewards from '../create_rewards';

function Modal({ modal, closeModal }) {
    if (!modal) return null;

    let component;
          
    switch (modal.modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;  
        case 'editTask':
            component = <EditTaskContainer task={modal.task} />;
            break;  
        case 'createTask':
            component = <CreateTaskContainer/>;
            break;
        case 'useRewards':
            component = <RewardsUse />;
            break;
        case 'createRewards':
            component = <CreateRewards />;
            break;
        default:
            return null;
    }

    debugger;
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
