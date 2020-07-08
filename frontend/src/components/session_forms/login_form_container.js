import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';//
import { closeModal } from '../../actions/modal_actions';

// const mapStateToProps = (state) => {
//     return {
        
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(LoginForm)