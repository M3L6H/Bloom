import React from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd'; 


class HabitIndexItem extends React.Component {

  render() {
    const { habit } = this.props;

    return (
      <Draggable draggableId={habit._id} index={this.props.index}>
        {(provided) => (

          <div className="hit-container"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef} 
          >
            <Link to={`/habits/${habit._id}`}>
              <p className="hit-title">
                {habit.title}
              </p>
              <span>{habit.description}</span>
            </Link>
          </div>

        )}
      </Draggable>
    );
  }

}

export default HabitIndexItem;