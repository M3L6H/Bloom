import React from 'react';
import TaskShow from './task_show';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
class TasksShow extends React.Component {

    constructor(props){
        super(props);
        this.dragEnd = this.dragEnd.bind(this); 
    }

    componentDidMount(){
        this.props.fetchHabits();
    }

    dragEnd(res) {
        console.log(res); 
    }

    render(){
        const { tasks, habits } = this.props;

        return(
            <div className="background">
                <DragDropContext onDragEnd={this.dragEnd}>
                <div className="show-tasks-container">
                    <div className="show-tasks-header">
                        <h3>Your Tasks</h3>
                        <p>Drag and Drop to re-order</p>
                    </div>
                    <Droppable droppableId="1">
                        {(provided) => 
                        <div className="shows-tasks-all" 
                            {...provided.droppableProps}
                            ref = {provided.innerRef}
                        >
                                {tasks.map((task, idx) => (
                                    <TaskShow key={task.id} index={idx} task={task} habit={habits[task.habit]}/>
                                ))}
                            {provided.placeholder}
                        </div>
                        }
                    </Droppable>
                </div>
                </DragDropContext>
            </div>
        )
    }
}

export default TasksShow;