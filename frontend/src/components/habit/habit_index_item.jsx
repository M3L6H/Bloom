import React from 'react';
import { Link } from 'react-router-dom';



class HabitIndexItem extends React.Component {

  render() {
    const { habit, deleteHabit } = this.props;
    const habitId = habit._id;
  
          
    return (
      <div className="hit-container">
        <ul className="hit-container-ele">
          <i
            className="fa fa-times-circle-o"
            aria-hidden="true"
            onClick={() => {
              return deleteHabit(habitId);
            }}
          ></i>
          <li>
            <span className="big-i"> I </span>
            <Link to={`/habits/${habit._id}`}>{habit.title}</Link>
          </li>
        </ul>
      </div>
    );
  }

}

export default HabitIndexItem;