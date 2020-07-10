import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import TaskForm from './task_form';
import { updateTask } from '../../actions/tasks_actions'


class EditTaskForm extends React.Component {

    render(){ 
        const { formType, task, closeModal, action } = this.props;
        
        return (
            
                < TaskForm
                    formType={formType}
                    task={task}
                    closeModal={closeModal}
                    action={action}
                 />
          
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskForm);