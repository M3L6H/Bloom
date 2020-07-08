import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import TaskForm from './task_form';
import { updateTask } from '../../actions/tasks_actions'


class EditTaskForm extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){ 
        const { formType, task, closeModal, updateTask } = this.props;
 
        return (
            <>
                < TaskForm
                    formType={formType}
                    task={task}
                    closeModal={closeModal}
                    updateTask={updateTask}
                 />
            </>

        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return ({
        formType: 'editTask'
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
        updateTask: (task) => dispatch(updateTask(task))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskForm);