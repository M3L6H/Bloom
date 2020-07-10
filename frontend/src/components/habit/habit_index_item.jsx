import React from 'react';
import { Link } from 'react-router-dom';



class HabitIndexItem extends React.Component {

  render() {
    const { habit, deleteHabit } = this.props;

    return (
      <div className="hit-container">
          <i className="fas fa-minus delete-icon" onClick={() => deleteHabit(habit._id)}></i>
        <Link to={`/habits/${habit._id}`}>
          <p className="hit-title">{habit.title}</p>
        </Link>
          <span>{habit.description}</span>
      </div>
    );
  }

}

export default HabitIndexItem;