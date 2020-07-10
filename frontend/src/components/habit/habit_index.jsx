import React from 'react';
import HabitIndexItem from './habit_index_item';
import { DragDropContext, Droppable} from "react-beautiful-dnd";
class HabitIndex extends React.Component {

    componentDidMount() {
        this.props.fetchHabits()
        this.props.fetchUser();
    }

    render() {
    
        const { habits, user } = this.props;
        if (!habits || !user) return null;
        return (
          <div className="background-index-habit">
            <DragDropContext onDragEnd={this.dragEnd}>
              
              <div className="show-habits-header">
                <h3>Your Habits</h3>
              </div>

              <Droppable droppableId="1">
                {(provided) => 

                  <div className="index-habit-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef} 
                  >
                    {user.habits.map((habitId, idx) => (
                      <HabitIndexItem habit={habits[habitId]} index={idx} key={habitId} />
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