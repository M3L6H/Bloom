// Dashboard container

import {fetchUser} from "../../actions/users_actions";
import Dashboard from "./dashboard";
import {connect} from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { deleteReward } from '../../actions/reward_actions';

function mSTP(state){
    return {
        user: state.entities.users[state.session.user.id]
    }
}

function mDTP(dispatch){
    return{
        fetchUser: ()=> dispatch(fetchUser()),
        openModal: (modalType,object) => dispatch(openModal(modalType,object)),
        deleteReward: (id) => dispatch(deleteReward(id))
    }
}

export default connect(mSTP,mDTP)(Dashboard); 