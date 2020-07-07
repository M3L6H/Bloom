import React from 'react';
import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions';


class TaksIndexItem extends React.Component {

    constructor(props) {
        super(props);
        //this.handleEditTask = this.handleEditTask.bind(this);
    }

    handleEditTask() {
    
    }
    
    render() {
        return null;

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
