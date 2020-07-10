import { connect } from 'react-redux';
import RewardForm from './reward_form';
import { createReward } from '../../actions/reward_actions';

function mSTP(state){
  return {
    formType:"Create Reward",
    reward: {
      title:"",
      petalCost: 1,
    },
  }
}

const mDTP = (dispatch) => ({
  action: reward => dispatch(createReward(reward))
});

export default connect(mSTP, mDTP)(RewardForm);