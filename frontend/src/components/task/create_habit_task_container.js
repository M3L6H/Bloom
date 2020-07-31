// This container returns a task creation form specifcically for use with the habit creation form


import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import TaskForm from "./task_form";


const mapStateToProps = (state, ownProps) => {
    return {
        task: {
            title: "",
            periodNum: 0,
            periodUnit: "",
            numTimesDone: 0,
            numPetals: 0,
        },
        formType: "createTask",
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
