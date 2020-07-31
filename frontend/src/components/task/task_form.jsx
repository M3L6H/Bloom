import React from 'react';

import { Button, Form, Dropdown, Input } from 'semantic-ui-react';

import errorMessage from "../error_message/error_message"

class TaskForm extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      task: props.task,
      errors: {}
    }
    this.state.task.periodNum = this.state.task.periodNum > 0 ? this.state.task.periodNum.toString() : "1";
    this.state.task.numPetals = this.state.task.numPetals > 0 ? this.state.task.numPetals.toString() : "1";
    this.state.task.periodUnit = this.state.task.periodUnit && this.state.task.periodUnit.length > 0 ? this.state.task.periodUnit : "day";
    this.validateTask = this.validateTask.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);

    this.placeholders = [
      "Brush teeth",
      "Drink water",
      "Cook lunch",
      "Go for a run",
      "Walk the dog"
    ];
  }

  validateTask(){
    const task = Object.assign({}, this.state.task);
    let errors = {};

    if(!task.title || task.title.length === 0){
      errors.title = "Title is required";
    }

    if(!task.periodNum || !Number.isInteger(Number(task.periodNum))){
      errors.periodNum = "Must be an integer";
    }

    if(!task.numPetals || !Number.isInteger(Number(task.numPetals))){
      errors.numPetals = "Must be an integer";
    }

    let response = {
      errors: errors,
      isValid: Object.keys(errors).length === 0
    }
    
    return response; 
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, this.state.task);
    if (this.props.formType === "editTask") {
        task._id = this.props.task._id; 
    } else {
        task.habit = this.props.habit;
    }

    const {errors, isValid} = this.validateTask(); 
    
    if(isValid){
      this.props.action(task)
        .then(() => {
          this.props.closeModal();
        }); 
    } else{
      this.setState({
        errors: errors
      })
    }
    
  }

  update(field) {
    return (e, details) => { 
      const { value, searchQuery } = details || {};
      const task = this.state.task;
      // There are several different ways values get passed in, thus all the ORs
      task[field] = searchQuery || value || e.currentTarget.value;
      this.setState({ task });
    };
  }

  render() {
    const { numPetals, title, periodNum, periodUnit } = this.state.task;
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
              value={ title }
              onChange={ this.update("title") }
            />
          </Form.Field>
          {errorMessage(this.state.errors, "title")}

          <Form.Field className="period-label">
            <label>Frequency</label>
          </Form.Field>
            <div className="period-group">
              <Input
                type="number"
                min="1"
                value={ periodNum }
                onChange={ this.update("periodNum") }
                className="period-num"
              />
              {errorMessage(this.state.errors,"periodNum")}
              <Dropdown
                placeholder="Select Period"
                selection
                onChange={ this.update("periodUnit") }
                value={ periodUnit }
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
              value={ numPetals }
              noResultsMessage={ `Custom (${ this.state.numPetals })` }
              options={ numPetalsOptions }
            />
            {errorMessage(this.state.errors, "numPetals")}
          </Form.Field>
          { submitButton }
        </Form>
      </div>
    );
  }
}
export default TaskForm;
