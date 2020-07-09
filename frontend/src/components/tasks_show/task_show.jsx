import React from 'react';

class TaskShow extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const { task, habit } = this.props;
        if(!task || !habit) return null;

        return(
            <div className="taskshow-container">
                <div className="taskshow-title">{task.title}   <span>{habit.title}</span></div>
                <div className="taskshow-detail">
                    <div className="frequency-and-petals">
                        <div className="task-item-frequency">
                            Goal: {task.numTimesDone}/{task.periodNum} per {task.periodUnit}
                        </div>
                        <div className="task-item-petals">
                            Reward: {task.numPetals} Petals
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TaskShow;