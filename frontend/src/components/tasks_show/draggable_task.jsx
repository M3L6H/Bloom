import React from 'react';
import {Draggable} from 'react-beautiful-dnd'; 
import TaskItemShow from "../landing/task_item_show";

// Expects props
class DraggableTask extends React.Component {

    render(){
        const { task, habit , user, updatePetals, updateTask } = this.props;
        if(!task || !habit) return null;
        return(
            <Draggable draggableId={task._id} index={this.props.index}>
                { (provided) =>(
                    
                    <div className="" 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} 
                    >
                        <TaskItemShow task={task} habit={habit} updateTask={updateTask} updatePetals={updatePetals} user={user}/>
                    </div>
                )}
            </Draggable>
        )
    }

}

export default DraggableTask;