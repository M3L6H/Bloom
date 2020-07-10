import { connect } from 'react-redux';

import { receiveSpawnFireworks } from '../../actions/fireworks_actions';

import Fireworks from './fireworks';

const mapDispatchToProps = (dispatch) => ({
  setSpawnFireworks: fn => dispatch(receiveSpawnFireworks(fn))
});

export default connect(null, mapDispatchToProps)(Fireworks);