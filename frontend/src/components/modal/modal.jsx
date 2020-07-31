import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';
import EditTaskContainer from '../task/edit_task_container';
import CreateTaskContainer from '../task/create_task_container';
import DeleteHabitContainer from '../habit/delete_habit_container';
import RewardsUse from '../rewards_use';
import {CreateRewards, EditReward} from '../reward_forms';
import SortingModal from "../loading_screens/sorting_modal";
import CreateHabitTask from "../task/create_habit_task_container";


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
            component = <EditTaskContainer task={modal.object} />;
            break;  
        case 'deleteHabit' :
            component = <DeleteHabitContainer props={modal.object} />
            break;
        case 'createTask':
            component = <CreateTaskContainer habit={modal.object}/>;
            break;
        case 'useRewards':
            component = <RewardsUse removePetal={ modal.object } />;
            break;
        case 'createRewards':
            component = <CreateRewards />;
            break;
        case 'editReward':
            component = <EditReward reward={modal.object}/>
            break; 
        case "autoSort":
            component = <SortingModal/>
            break; 
        case "createHabitTask":
            component = <CreateHabitTask action={modal.object}/>
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
