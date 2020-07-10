import React from 'react';


class TaskForm extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = props.task;
    this.state.periodNum = this.state.periodNum > 0 ? this.state.periodNum : 1;
    this.state.numPetals = this.state.numPetals > 0 ? this.state.numPetals : 1;
    this.state.periodUnit = this.state.periodUnit.length > 0 ? this.state.periodUnit : "day";
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, this.state);
    if (this.props.formType === "editTask") {
        task._id = this.props.task._id; 
    } else {
        task.habit = this.props.habit;
    }

    if (!task.title) return;
    
    debugger;

    this.props.action(task)
        .then(() => {this.props.closeModal();
    });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
 
    const { formType } = this.props;
    const submitButton =
      formType === "editTask" ? (
        <button onClick={this.handleSubmit}>update</button>
      ) : (
        <button onClick={this.handleSubmit}>create</button>
      );

    if (formType !== "createTask" && !this.state) {
      return null;
    }

    const freqDropDown = (
      <select
        name="frq-select"
        id="frq-slct"
        onChange={this.update("periodUnit")}
        value={this.state.periodUnit}
      >
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month" >Month</option>
        <option value="year" >Year</option>
      </select>
    );

    const renderTitle = 
      formType === "editTask" ? (
        "Edit Task") : ("Create Task")
    
    return (
      <div className="task-modal-background">
        <form className="task-form">
          <div className="task-form-top">{renderTitle}</div>
          <textarea
            className="task-form-title"
            type="textarea"
            value={this.state.title}
            placeholder="Add your task"
            onChange={this.update("title")}
          />
          <div className="task-form-input">
            <div className="task-form-num-input">
              <input
                type="number"
                min="1"
                value={this.state.periodNum}
                onChange={this.update("periodNum")}
              />{" "}
              times per {freqDropDown}
            </div>
            <div className="task-form-petal-cnt">
              Get{" "}
              <input
                type="number"
                min="1"
                value={this.state.numPetals}
                onChange={this.update("numPetals")}
              />{" "}
              petals per completion
            </div>
            <div className="submit-btn">{submitButton}</div>
          </div>
        </form>
      </div>
    );
  }
}
export default TaskForm;
