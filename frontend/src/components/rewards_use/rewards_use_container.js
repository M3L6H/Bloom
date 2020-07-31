import RewardsUse from './rewards_use';
import { connect } from 'react-redux';
import { updatePetals } from '../../actions/users_actions';
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  ...ownProps,
  petals: Object.values(state.entities.users)[0].petals,
  rewards: Object.values(state.entities.users)[0].rewards,
  spawnFireworks: state.ui.spawnFireworks
});

const mDTP = (dispatch) => ({
  updatePetals: (petals) => dispatch(updatePetals(petals)),
  openModal: (modalType, object) => dispatch(openModal(modalType, object))
});

export default connect(mSTP, mDTP)(RewardsUse);