import React from 'react';
import {Draggable} from 'react-beautiful-dnd'; 
import TaskItemShow from '../landing/task_item_show';

// Expects props task, habit, user, updatePetals(fcn), and updateTask(fcn)
class DraggableTask extends TaskItemShow {
    render(){
        const { task, habit, openModal, index } = this.props;
        if(!task || !habit) return null;
        let completedT;
        const complete = this.state.complete ? "check-" : "";

        if (task.numTimesDone === task.periodNum) {
            completedT = "title-completed"
        }

        return(
            <Draggable draggableId={task._id} index={index}>
                { (provided) =>(
                    
                    <div className={`taskshow-container${ this.state.complete ? " complete" : "" }`} 
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef} 
                      onClick={ () => openModal("editTask", task) }
                    >
                      <div className="task-complete"><i className={`far fa-${complete}square`} onClick={ this.completeTask }></i></div>
                      <div className={`taskshow-title ${completedT}`}>{task.title} <span>- {habit.title}</span></div>
                      <div className="taskshow-detail">
                          <div className="frequency-and-petals">
                              <div className="task-item-frequency">
                                  Goal: {task.numTimesDone}/{task.periodNum} per {task.periodUnit}
                              </div>
                              <div className="task-item-petals">
                                  Reward: { `${ task.numPetals } Petal${ task.numPetals > 1 ? "s" : "" }` }
                              </div>
                          </div>
                      </div>
                    </div>
                )}
            </Draggable>
        )
    }

}

export default DraggableTask;