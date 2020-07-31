// This container returns a form for creating tasks directly by editing an existing habit

import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import TaskForm from "./task_form";
import { createTask } from "../../actions/tasks_actions";


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
    action: (task) => dispatch(createTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
