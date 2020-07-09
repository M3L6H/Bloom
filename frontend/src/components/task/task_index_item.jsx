import React from 'react';
import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions';



class TaksIndexItem extends React.Component {

    constructor(props) {
        super(props);
        //this.handleEditTask = this.handleEditTask.bind(this);
    }

    
    render() {
        const {task, complete, openModal} = this.props
        if (!task) return null;
        //debugger
        return (
            <div>
                <ul className='task-list'>
                    <li className='single-task' onClick={() => openModal('editTask', this.props.task)}>
                        {task.title}
                    </li>                
                </ul>
            </div>
            )

    }
}

const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: (modal, task) => dispatch(openModal(modal, task))
    })
}

export default connect(null, mapDispatchToProps)(TaksIndexItem);
