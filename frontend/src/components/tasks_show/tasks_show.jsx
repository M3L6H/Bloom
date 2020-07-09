import React from 'react';
import TaskShow from './task_show';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
class TasksShow extends React.Component {
    constructor(props){
        super(props);
        this.dragEnd = this.dragEnd.bind(this); 
        this.state = {
          loaded: false,
          taskOrder: null
        }; 
    }

    async componentDidMount(){
        this._isMounted = true;
      
        // Fetch the current user and their habits/tasks
        await this.props.fetchHabits();
        const { user } = await this.props.fetchUser();
        if (this._isMounted) {
          this.setState({ loaded: true, taskOrder: Array.from(user.dailyTaskList) });
        }
    }

    componentWillUnmount() {
      this._isMounted = false;
    }
    

    dragEnd(res) {
        let newTaskList = Array.from(this.props.user.dailyTaskList);
        newTaskList.splice(res.source.index,1)
        newTaskList.splice(res.destination.index,0,res.draggableId);
        this.setState({taskOrder: newTaskList}); 
        this.props.updateDailyTaskList(newTaskList); 
    }

    render(){
        const { tasks, habits } = this.props;

        //Check for relevent props before rendering
        if(!this.state.loaded){
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