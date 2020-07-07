import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions'

class EditTaskContainer extends React.Component {

    constructor(props) {
        this.state = {
            title: "task-title",
            periodNum: 0,
            periodUnit: 0,
            numTimesDone: 0,
            numPetals: 0
        }

    }

    render(){ 

        const freqDropDown = (
            <select name="topic-select" id="slct">
                <option>Category</option>
                <option value="1">Day</option>
                <option value="2">Week</option>
                <option value="3">Month</option>   
                <option value="4">Year</option>   
            </select>
        )
        
        return (
            <div className='task-edit-modal'>
                <form className='task-form' >
                    <div className='task-form-top'>
                        {this.state.title}
                        <i class="fa fa-times" 
                            aria-hidden="true" 
                            onClick={()=> this.props.closeModal()}></i>
                    </div>
                    <input type="number" /> {freqDropDown}
                    {this.state.numPetals} petals
                    <button>update</button>
                </form>
            </div>

        )
    }
}