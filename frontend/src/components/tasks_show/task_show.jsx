import React from 'react';
import {Draggable} from 'react-beautiful-dnd'; 
class TaskShow extends React.Component {

    render(){
        const { task, habit } = this.props;
        if(!task || !habit) return null;
        return(
            <Draggable draggableId={task._id} index={this.props.index}>
                { (provided) =>(
                    
                    <div className="taskshow-container" 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} 
                    >
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
                )}
            </Draggable>
        )
    }

}

export default TaskShow;