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
          <div>
            <ul className="task-list">
              <i
                className="fa fa-times"
                aria-hidden="true"
                onClick={() => {
                  deleteTask(taskId);
                }}
              ></i>
              <li
                className="single-task"
                onClick={() => openModal("editTask", this.props.task)}
              >
                {task.title}
                <ul className="single-task-details">
                  <li>
                    {task.periodNum} / {task.periodUnit}{" "}
                  </li>
                  <li>{task.numTimesDone} times did</li>
                  <li>earn {task.numPetals} petals </li>
                </ul>
              </li>
            </ul>
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
