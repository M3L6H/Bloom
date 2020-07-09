import React from 'react';


class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: props.task.title || "",
    //   periodNum: 0,
    //   periodUnit: "",
    //   numTimesDone: 0,
    //   numPetals: 0,
    // };

 
    this.state = props.task;
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
      
    e.preventDefault();
    const task = Object.assign({}, this.state);
    debugger;
    if (this.props.formType === "editTask") {
        task._id = this.props.task._id; 
    } else {
        task.habit = this.props.habit;
    }
    //debugger;
          
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

    const getTask =
      formType === "createTask" ? (
      <input 
        type='text' 
        placeholder='Add your task' 
        onChange={this.update('title')}
        />
      ) : (
        null
      );

    const freqDropDown = (
      <select
        name="frq-select"
        id="frq-slct"
        onChange={this.update("periodUnit")}
      >
        <option>Category</option>
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
    );
    
    return (
      <div className="task-modal-background">
        <form className="task-form">
          <div className="task-form-top">
            {this.state.title}
            {getTask}
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => this.props.closeModal()}
            ></i>
          </div>
          <div className="task-form-num-input">
            <input type="number" onChange={this.update("periodNum")} />{" "}
            {freqDropDown}
          </div>
          <div className="task-form-petal-cnt">
            {this.state.numPetals} petals
          </div>
          <div className="submit-btn">{submitButton}</div>
        </form>
      </div>
    );
  }
}
export default TaskForm;
