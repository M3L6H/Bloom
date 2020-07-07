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
    }

    render() {

        const freqDropDown = (
            <select name="topic-select" id="slct">
                <option>Category</option>
                <option value="1">Day</option>
                <option value="2">Week</option>
                <option value="3">Month</option>
                <option value="4">Year</option>
            </select>
        )


        //
        return (
            <div className='task-modal-background'>
                <p>I'm in task form!</p>
                <form className='task-form' >
                    <div className='task-form-top'>
                        {this.state.title}
                        <i className="fa fa-times"
                            aria-hidden="true"
                            onClick={() => this.props.closeModal()}></i>
                    </div>
                    <input type="number" /> {freqDropDown}
                    {this.state.numPetals} petals
                    <button>update/create</button>
                </form>
            </div>

        )
    }
}
export default TaskForm;