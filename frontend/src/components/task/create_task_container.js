import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import TaskForm from './task_form';
import { createTask } from '../../actions/tasks_actions';

class CreateTaskForm extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { formType, task, action, closeModal } = this.props;
        
        if (!task) return null;

        return (
        
                < TaskForm
                    formType={formType}
                    task={task}
                    action={action}
                    closeModal={closeModal}
                />
            )
        }
}

const mapStateToProps = (state, ownProps) => {

    return ({
        formType: 'createTask'
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
        action: (task) => dispatch(createTask(task))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm);