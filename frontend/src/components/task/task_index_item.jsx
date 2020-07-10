import React from 'react';
import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions';
import { deleteTask } from "../../actions/tasks_actions";



class TaskIndexItem extends React.Component {

    render() {
        const { task, openModal, deleteTask } = this.props;
        if (!task) return null;
        const taskId = task._id;
        return (
          <div className="task-list"
            onClick={() => openModal("editTask", this.props.task)}
          >
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => {deleteTask(taskId)}}
            ></i>
            <div
              className="single-task"
            >
              <div className="header">{ task.title }</div>
              <div className="details">
                <span>
                  { `${ task.numTimesDone }/${ task.periodNum } per ${ task.periodUnit }`}
                </span>
                <span>
                  { `${ task.numPetals } petal${ task.numPetals > 1 ? "s" : "" }` }
                </span>
              </div>
            </div>
          </div>
        );

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      openModal: (modal, task) => dispatch(openModal(modal, task)),
      deleteTask: (id) => dispatch(deleteTask(id)),
    };
}

export default connect(null, mapDispatchToProps)(TaskIndexItem);
