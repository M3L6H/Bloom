import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login, demoLogin, clearErrors } from "../../actions/session_actions";
import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => {

  return {
    login: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    demoLogin: () => dispatch(demoLogin()),
    clearErrors: () => dispatch(clearErrors()),
    openModal: (modalType, object) => dispatch(openModal(modalType, object))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);