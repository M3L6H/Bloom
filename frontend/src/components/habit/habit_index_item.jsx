import React from 'react';
import { Link } from 'react-router-dom';



class HabitIndexItem extends React.Component {

  render() {
    const { habit, deleteHabit } = this.props;
    const habitId = habit._id;
  
          
    return (
      <div className="hit-container">
        <i
          className="fa fa-times-circle-o"
          aria-hidden="true"
          onClick={() => {return deleteHabit(habitId)}}
        ></i>
        <Link to={`/habits/${habit._id}`}>
          <p className="hit-title">{habit.title}</p>
        </Link>
      </div>
    );
  }

}

export default HabitIndexItem;