import { connect } from 'react-redux';
import Main from './main';
import { openModal } from '../../actions/modal_actions';

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mDTP)(Main);