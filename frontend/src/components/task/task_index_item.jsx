import React from 'react';
import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions';
import { RECEIVE_USER_LOGOUT } from '../../actions/session_actions';


class TaksIndexItem extends React.Component {

    constructor(props) {
        super(props);
        //this.handleEditTask = this.handleEditTask.bind(this);
    }

    
    render() {
        const {task, complete, openModal} = this.props

        return (
            <div>
                <ul className='task-list'>
                    <li className='single-task' onClick={() => openModal('editTask')}>
                        {task}
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
        openModal: (modal) => dispatch(openModal(modal))
    })
}

export default connect(null, mapDispatchToProps)(TaksIndexItem);
