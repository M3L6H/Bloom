import React from 'react';
import { Link } from 'react-router-dom';



class HabitIndexItem extends React.Component {

  render() {
    const { habit, deleteHabit } = this.props;

    return (
      <div className="hit-container">
        <i class="fa fa-times" aria-hidden="true" onClick={() => { deleteHabit(habit._id) }}></i>
        <Link to={`/habits/${habit._id}`}>
          <p className="hit-title">
            
            {habit.title}
          </p>
          <span>{habit.description}</span>
        </Link>
      </div>
    );
  }

}

export default HabitIndexItem;