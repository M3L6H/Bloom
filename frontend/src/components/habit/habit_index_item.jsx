import React from 'react';
import { Link } from 'react-router-dom';



class HabitIndexItem extends React.Component {

  render() {
    const { habit } = this.props;
          

    return (
      <div className="hit-container">
        <Link to={`/habits/${habit._id}`}>
          <p className="hit-title">
            {habit.title}
          </p>
        </Link>
      </div>
    );
  }

}

export default HabitIndexItem;