import React from 'react';


class TaskForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "task-title",
            periodNum: 0,
            periodUnit: 0,
            numTimesDone: 0,
            numPetals: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    getSelectedValue() {
        let e = document.getElementById('frq-slct');
        let result = e.options[e.selectedIndex].value;
        //update periodUnit //define unit???
    }

    handleSubmit(e) {
        e.preventDefault();
        const task = Object.assign({}, this.state);
        this.props.action(task)
            .then(() => { this.props.action() })
    }

    render() {
        debugger;
        const {formType} = this.props;
        const submitButton = (
            (formType === 'editTask') ? (
                <button onClick={this.handleSubmit}>update</button>
            ) : <button onClick={this.handleSubmit}>create</button>
        )
        //debugger
        const freqDropDown = (
            <select name="frq-select" id="frq-slct">
                <option>Category</option>
                <option value="1">Day</option>
                <option value="2">Week</option>
                <option value="3">Month</option>
                <option value="4">Year</option>
            </select>
        )


        return (
            <div className='task-modal-background'>
                <form className='task-form' >
                    <div className='task-form-top'>
                        {this.state.title}
                        <i className="fa fa-times"
                            aria-hidden="true"
                            onClick={() => this.props.closeModal()}></i>
                    </div>
                    <div className='task-form-num-input'>
                        <input type="number" /> {freqDropDown}
                    </div>
                    <div className='task-form-petal-cnt'>
                        {this.state.numPetals} petals
                    </div>
                    <div className='submit-btn'>
                        {submitButton}
                    </div>
                </form>
            </div>

        )
    }
}
export default TaskForm;
