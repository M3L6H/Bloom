import React from 'react';
import DraggableTask from './draggable_task';
import { Button, Dimmer, Loader } from 'semantic-ui-react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

class TasksShow extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
          loaded: false,
          taskOrder: []
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
        this.user = user; 
        if (this._isMounted) {
          this.setState({ loaded: true, taskOrder: Array.from(user.dailyTaskList) });
        }
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    async sort(e){
        e.preventDefault();
        this.props.openModal("autoSort");
        await this.props.sortDailyTaskList();
        this.setState({taskOrder:this.props.user.dailyTaskList});
        this.props.closeModal(); 
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
        const { tasks, habits , updatePetals , updateTask } = this.props;
        const { loaded } = this.state;

        return(
            <div className="background">
                <DragDropContext onDragEnd={this.dragEnd}>
                    <div className="show-tasks-container">

                        <div className="show-tasks-header">

                            <h3>Your Tasks</h3>
                            <Button onClick={this.sort} className="ui button auto-sort">
                              Auto Sort
                            </Button>

                            <p>Drag and Drop Tasks to Change Priority</p>
                            <span>Auto Sort re-orders your task list to match the priority of your habits list</span>

                        </div>

                        <Droppable droppableId="1">
                            {(provided) => 

                                <div className="shows-tasks-all" 
                                    {...provided.droppableProps}
                                    ref = {provided.innerRef}
                                >
                                  <Dimmer inverted active={ !loaded } >
                                    <Loader>
                                      Loading
                                    </Loader>
                                  </Dimmer>
                                        {this.state.taskOrder.map((taskId, idx) => (
                                            <DraggableTask 
                                              key={taskId} 
                                              index={idx} 
                                              updateTask={updateTask} 
                                              updatePetals={updatePetals} 
                                              user={this.user} 
                                              task={tasks[taskId]} 
                                              habit={habits[tasks[taskId].habit]}
                                              openModal={ this.props.openModal }
                                            />
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