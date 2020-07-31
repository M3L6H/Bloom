//This container returns a form for editing an existing task

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import TaskForm from './task_form';
import { updateTask } from '../../actions/tasks_actions'


const mapStateToProps = (state) => {

    return ({
        formType: 'editTask',
        task: state.ui.modal.object
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
        action: (task) => dispatch(updateTask(task))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);