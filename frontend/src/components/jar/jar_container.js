import { connect } from 'react-redux';
import { updatePetals } from '../../actions/users_actions';
import { openModal } from '../../actions/modal_actions';
import Jar from './jar';

const mapDispatchToProps = (dispatch) => ({
  updatePetals: petals => dispatch(updatePetals(petals)),
  openModal: (modal, object) => dispatch(openModal(modal, object))
});

export default connect(null, mapDispatchToProps)(Jar);