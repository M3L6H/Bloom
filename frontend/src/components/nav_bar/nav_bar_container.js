import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mSTP = (state) => { 
    return ({
    currentUser: state.entities.users[state.session.id],
    loggedIn: Boolean(state.session.id),
    friendRequests: state.entities.friendRequests
    })
}

const mDTP = (dispatch) => {
    return ({
    logout: () => dispatch(logout())
    })
}

export default withRouter(connect(mSTP, mDTP)(NavBar));