// Edit reward container
// exports the edit reward form

//Imports
import { connect } from 'react-redux';
import RewardForm from './reward_form';
import { editReward, deleteReward } from '../../actions/reward_actions';


function mSTP(state) {
    return {
        formType: "Edit Reward",
    }
}

const mDTP = (dispatch) => ({
    action: reward => dispatch(editReward(reward)),
    deleteReward: (id) => dispatch(deleteReward(id))
});

export default connect(mSTP, mDTP)(RewardForm);