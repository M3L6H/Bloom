import React from 'react';
import {connect} from 'react-redux';


class TaksIndexItem extends React.Component {

    constructor(props) {
        super(props);
        //this.handleEditTask = this.handleEditTask.bind(this);
    }

    handleEditTask() {
    
    }
    
    render() {
        return {

        }
    }
}

const mapStateToProps = (state) = {
    return ({

    })
}

const mapDispatchToProps = (dispatch) = {
    return ({

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TaksIndexItem);
