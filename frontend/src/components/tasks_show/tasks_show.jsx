import React from 'react';
import TaskShow from './task_show';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
class TasksShow extends React.Component {

    constructor(props){
        super(props);
        this.dragEnd = this.dragEnd.bind(this); 
        this.state = {}; 
    }

    componentDidMount(){

        // Fetch the current user and their habits/tasks
        this.props.fetchHabits();
        this.props.fetchUser();
        
    }

    dragEnd(res) {
        let newTaskList = Array.from(this.props.user.dailyTaskList);
        newTaskList.splice(res.source.index,1)
        newTaskList.splice(res.destination.index,0,res.draggableId);
        this.setState({taskOrder: newTaskList}); 
        this.props.updateDailyTaskList(newTaskList); 
    }

    render(){
        const { tasks, habits, user } = this.props;

        //Check for relevent props before rendering
        if(!this.props.habits || !this.props.user){
            return null; 
        }

        if (!this.state.taskOrder) {
            this.setState({ taskOrder: Array.from(user.dailyTaskList) });
            return null; 
        }

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
                                        {this.state.taskOrder.map((taskId, idx) => (
                                            <TaskShow key={taskId} index={idx} task={tasks[taskId]} habit={habits[tasks[taskId].habit]}/>
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