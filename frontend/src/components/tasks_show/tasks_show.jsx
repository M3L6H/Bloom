import React from 'react';
import TaskShow from './task_show';
import { Button } from 'semantic-ui-react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
class TasksShow extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
          loaded: false,
          taskOrder: null
        }; 

        //Function bindings
        this.dragEnd = this.dragEnd.bind(this); 
        this.sort = this.sort.bind(this); 
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

    async sort(e){
        e.preventDefault();
        await this.props.sortDailyTaskList();
        this.setState({taskOrder:this.props.user.dailyTaskList})
    }
    

    dragEnd(res) {

        // If out of bounds, do nothing
        if(!res.destination){
            return;
        }

        // If no change, do nothing
        if(res.destination.droppableId === res.source.droppableId 
            && res.destination.index === res.source.index){
                return;
            }
        // Create copy of task list and update with new positions
        let newTaskList = Array.from(this.props.user.dailyTaskList);
        newTaskList.splice(res.source.index,1)
        newTaskList.splice(res.destination.index,0,res.draggableId);

        //Set state and update database
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
                            <Button onClick={this.sort} className="ui button auto-sort">
                              Auto Sort
                            </Button>

                            <p>Drag and Drop to Re-Order</p>

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