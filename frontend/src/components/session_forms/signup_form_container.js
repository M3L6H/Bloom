import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup } from "../../actions/session_actions";
import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modalType, object) => dispatch(openModal(modalType, object))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
