import RewardsUse from './rewards_use';
import { connect } from 'react-redux';
import { updatePetals } from '../../actions/users_actions';

const mSTP = (state) => ({
  petals: Object.values(state.entities.users)[0].petals,
  rewards: Object.values(state.entities.users)[0].rewards
});

const mDTP = (dispatch) => ({
  updatePetals: (petals) => dispatch(updatePetals(petals)),
});

export default connect(mSTP, mDTP)(RewardsUse);