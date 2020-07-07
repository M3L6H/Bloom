import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions'
import TaskForm from './task_form';

class EditTaskForm extends React.Component {

    constructor(props) {
        super(props)


    }

    render(){ 
        const {formType, task} = this.props;
        if(!task) return null;

        return (
            <>
                < TaskForm
                    formType={formType}
                    task={task}
                 />
            </>

        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return ({
        formType: 'Edit Task'
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskForm);