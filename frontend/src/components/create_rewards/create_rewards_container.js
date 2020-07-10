import { connect } from 'react-redux';
import CreateRewards from './create_rewards';
import { createReward } from '../../actions/reward_actions';

const mDTP = (dispatch) => ({
  createReward: reward => dispatch(createReward(reward))
});

export default connect(null, mDTP)(CreateRewards);