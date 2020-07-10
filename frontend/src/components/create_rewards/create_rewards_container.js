import { connect } from 'react-redux';
import CreateRewards from './create_rewards';
import { createReward } from '../../actions/reward_actions';
import { closeModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
  createReward: reward => dispatch(createReward(reward)),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mDTP)(CreateRewards);