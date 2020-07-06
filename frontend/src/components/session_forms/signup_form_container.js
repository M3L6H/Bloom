import { connect } from 'react-redux';
import SignupForm from './login_form';
import { signup } from '../../actions/session_actions';// 

// const mapStateToProps = (state) => {
//     return {

//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SignupForm)