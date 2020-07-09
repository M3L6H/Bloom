import { connect } from 'react-redux';
import { updatePetals } from '../../actions/users_actions';
import Jar from './jar';

const mapStateToProps = (state) => ({
  user: Object.values(state.entities.users)[0]
});

const mapDispatchToProps = (dispatch) => ({
    updatePetals: petals => dispatch(updatePetals(petals))
});

export default connect(mapStateToProps, mapDispatchToProps)(Jar);