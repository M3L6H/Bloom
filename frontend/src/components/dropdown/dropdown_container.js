import { connect } from 'react-redux';
import Dropdown from './dropdown';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modalType, object) => dispatch(openModal(modalType, object))
});

export default connect(null, mapDispatchToProps)(Dropdown);