import React from 'react';
import HabitIndexItem from './habit_index_item';
import { DragDropContext, Droppable} from "react-beautiful-dnd";

class HabitIndex extends React.Component {

    constructor(props){
      super(props);

      // Init state
      this.state = {
        loaded: false,
        taskOrder: null
      }; 

      //Function bindings
      this.dragEnd = this.dragEnd.bind(this);
    }

    async componentDidMount(){
        this._isMounted = true;
      
        // Fetch the current user and their habits
        await this.props.fetchHabits();
        const { user } = await this.props.fetchUser();

        if (this._isMounted) {
          this.setState({ loaded: true, habitList: Array.from(user.habits) });
        }
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    dragEnd(res){
      // If out of bounds, do nothing
      if (!res.destination) {
        return;
      }

      // If no change, do nothing
      if (res.destination.droppableId === res.source.droppableId
        && res.destination.index === res.source.index) {
        return;
      }

      // Reorder Habits
      // Create copy of habitList and update with new positions
      let newHabitList = Array.from(this.props.user.habits);
      newHabitList.splice(res.source.index, 1)
      newHabitList.splice(res.destination.index, 0, res.draggableId);

      //Set state and update database
      this.setState({ habitList: newHabitList });
      this.props.updateHabitList(newHabitList); 
    }
    render() {
        const { habits,  deleteHabit, openModal } = this.props;
        
       //Check for relevent props before rendering
        if(!this.state.loaded){
            return null ;
       } 

        return (
          <div className="background-index-habit">
            <DragDropContext onDragEnd={this.dragEnd}>
              
              <div className="show-habits-header">
                <h3>Your Habits</h3>
                <i className="fas fa-plus add-icon" onClick={() => this.props.history.push("/habit")}></i>
                <p>Click to Edit Details</p>
              </div>

              <Droppable droppableId="1">
                {(provided) => 

                  <div className="index-habit-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef} 
                  >
                    {this.state.habitList.map((habitId, idx) => (
                      <HabitIndexItem 
                        openModal={openModal}
                        habit={habits[habitId]} 
                        index={idx} key={habitId} 
                        deleteHabit={deleteHabit}
                        redirect={false}
                        />
                    ))}
                    {provided.placeholder}
                  </div>

                }
              </Droppable>

            </DragDropContext>
          </div>
        );
    }
}

export default HabitIndex;