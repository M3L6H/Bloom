import React from 'react';

import { Form, Dropdown } from 'semantic-ui-react';

class TaskForm extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = props.task;
    this.state.periodNum = this.state.periodNum > 0 ? this.state.periodNum : 1;
    this.state.numPetals = this.state.numPetals > 0 ? this.state.numPetals : 1;
    this.state.periodUnit = this.state.periodUnit.length > 0 ? this.state.periodUnit : "day";
    this.handleSubmit = this.handleSubmit.bind(this);

    this.placeholders = [
      "Brush teeth",
      "Drink water",
      "Cook lunch",
      "Go for a run",
      "Walk the dog"
    ];
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

    const formTitle = 
      formType === "editTask" ? (
        "Edit Task") : ("Create Task")
    
    return (
      <div className="task-modal-background">
        <Form className="task-form">
          <div className="task-form-top">{ formTitle }</div>
          <Form.Field>
            <label>Title</label>
            <input 
              placeholder={ this.placeholders[Math.floor(Math.random() * this.placeholders.length)] }
              value={ this.state.title }
              onChange={ this.update("title") }
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <input
                type="number"
                min="1"
<<<<<<< HEAD
                value={ this.state.periodNum }
                onChange={ this.update("periodNum") }
              />
            </Form.Field>
            <Form.Field>
              <Dropdown
                placeholder="Select Period"
                selection
                onChange={ this.update("periodUnit") }
                value={ this.state.periodUnit }
                options={ [
                  { key: "Day", text: "per Day", value: "day" },
                  { key: "Week", text: "per Week", value: "week" },
                  { key: "Month", text: "per Month", value: "month" },
                  { key: "Year", text: "per Year", value: "year" },
                ] }
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Reward</label>
            <Dropdown
              placeholder="Select Reward"
              selection
              onChange={ this.update("numPetals") }
              value={ this.state.numPetals }
              options={ [
                { key: "Small", text: "Small (1 petal)", value: 1 },
                { key: "Medium", text: "Medium (5 petals)", value: 5 },
                { key: "Large", text: "Large (10 petals)", value: 10 },
              ] }
            />
          </Form.Field>
        </Form>
=======
                value={this.state.numPetals}
                onChange={this.update("numPetals")}
              />{" "}
              petals per full completion
            </div>
            <div className="submit-task-btn">{submitButton}</div>
          </div>
        </form>
>>>>>>> bc580c5a7c964d7d3a831df6ae63cb7afb88d823
      </div>
    );
  }
}
export default TaskForm;
