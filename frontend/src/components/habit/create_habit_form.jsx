import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

class CreateHabitForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            task: "",
            tasks: []
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
    }


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleEnter(e) {
        if (e.key === "Enter") {
            this.state.tasks.unshift({ title: this.state.task });
            this.setState({ task: "" });
        }
    }

    handleAddTask(e) {
        this.state.tasks.unshift({ title: this.state.task });
        this.setState({ task: "" });
    }

    async handleSubmit(e) {
        e.preventDefault();
        let habit = {title: this.state.title, description: this.state.description, tasks: this.state.tasks };
        await this.props.createHabit(habit);
        this.setState({ title: "", task: "", description: "", tasks: [] });
        this.props.history.push("/landing");
    }

    removeTask(idx) {
        return e => {
        let newTask = this.state.tasks.slice();
        newTask.splice(idx,1);
        this.setState({ tasks: newTask });
        };
    }

    showTasks() {
        if(!this.state.tasks.length) {
            return(
                <div className="prop-user-for-tasks">
                    Currently no tasks have been assigned. Please add tasks to achieve your goal.
                </div>
            )
        } else {
            return(
                <> <p className="label-tasks">Tasks</p>
                <div className="associated-tasks">
                        {this.state.tasks.map((task, idx) => <div key={idx} className="create-task-item">{Object.values(task)} <i className="far fa-minus-square" onClick={this.removeTask(idx)}></i></div>)}
                </div>
                </>
        )}
    }

    render(){

        return(
            <div className="background-create-habit">
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 300 }}>
                        <Form className='user-input-form' size='small' >
                            <div className="habit-add-title">
                                Title
                            </div>
                            <Form.Input
                                placeholder='Habit'
                                value={this.state.title}
                                onChange={this.update('title')} />
                            <div className="ui form">
                                <div className="field">
                                    <label>Description</label>
                                    <textarea rows="4" placeholder="Describe your goals." onChange={this.update('description')} value={this.state.description} ></textarea>
                                </div>
                            </div>
                            {this.showTasks()}
                            <div className="habit-add-task-button">
                                Add Tasks  <i className="far fa-plus-square" onClick={this.handleAddTask}></i>
                            </div>
                            <div className="habit-taks-creator">
                                <Form.Input
                                    placeholder='Your task here..'
                                    value={this.state.task}
                                    onChange={this.update('task')}
                                    onKeyDown={this.handleEnter} />
                            </div>
                            <Button className='ui test button' type="button" fluid size='medium' onClick={this.handleSubmit}>
                                Create Habit
                            </Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default CreateHabitForm;