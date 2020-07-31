import React from 'react';

import { Button, Form, Dropdown, Input } from 'semantic-ui-react';

class TaskForm extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = props.task;
    this.state.periodNum = this.state.periodNum > 0 ? this.state.periodNum : "1";
    this.state.numPetals = this.state.numPetals > 0 ? this.state.numPetals : "1";
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
    return (e, details) => { 
      const { value, searchQuery } = details || {};
      // There are several different ways values get passed in, thus all the ORs
      this.setState({ [field]: searchQuery || value || e.currentTarget.value })
    };
  }

  render() {
    const { numPetals } = this.state;
    const { formType } = this.props;

    const submitButton =
      formType === "editTask" ? (
        <Button type="submit" fluid onClick={this.handleSubmit}>Update</Button>
      ) : (
        <Button type="submit" fluid onClick={this.handleSubmit}>Create</Button>
      );

    if (formType !== "createTask" && !this.state) {
      return null;
    }

    const formTitle = 
      formType === "editTask" ? (
        "Edit Task") : ("Create Task");

    const numPetalsOptions = [
      { key: "Small", text: "Small (1 petal)", value: "1" },
      { key: "Medium", text: "Medium (5 petals)", value: "5" },
      { key: "Large", text: "Large (10 petals)", value: "10" }
    ];

    if (numPetals && numPetals !== "1" && numPetals !== "5" && numPetals !== "10") {
      numPetalsOptions.push({ key: "Custom", text: `Custom (${ numPetals } petals)`, value: numPetals });
    }
    
    return (
      <div className="task-modal-background">
        <Form className="task-form" unstackable>
          <div className="task-form-top">{ formTitle }</div>
          <Form.Field>
            <label>Title</label>
            <input 
              placeholder={ this.placeholders[Math.floor(Math.random() * this.placeholders.length)] }
              value={ this.state.title }
              onChange={ this.update("title") }
            />
          </Form.Field>
          <Form.Field className="period-label">
            <label>Frequency</label>
          </Form.Field>
            <div className="period-group">
              <Input
                type="number"
                min="1"
                value={ this.state.periodNum }
                onChange={ this.update("periodNum") }
                className="period-num"
              />
              <Dropdown
                placeholder="Select Period"
                selection
                onChange={ this.update("periodUnit") }
                value={ this.state.periodUnit }
                className="period-unit"
                options={ [
                  { key: "Day", text: "per Day", value: "day" },
                  { key: "Week", text: "per Week", value: "week" },
                  { key: "Month", text: "per Month", value: "month" },
                  { key: "Year", text: "per Year", value: "year" },
                ] }
              />
            </div>
          <Form.Field>
            <label>Reward</label>
            <Dropdown
              placeholder="Select Reward"
              selection
              search
              onSearchChange={ this.update("numPetals") }
              onChange={ this.update("numPetals") }
              value={ this.state.numPetals }
              noResultsMessage={ `Custom (${ this.state.numPetals })` }
              options={ numPetalsOptions }
            />
          </Form.Field>
          { submitButton }
        </Form>
      </div>
    );
  }
}
export default TaskForm;
