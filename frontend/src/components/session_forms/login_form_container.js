import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login, demoLogin } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => {

  return {
    login: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    demoLogin: () => dispatch(demoLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);