import React from 'react';
import HabitIndexItem from './habit_index_item';

class HabitIndex extends React.Component {

    componentDidMount() {
        this.props.fetchHabits();
    }

    render() {
    
        const { habits } = this.props;
        if (!habits) return null;
              
        return (
          <div className="background-index-habit">
            <div className="show-habits-header">
              <h3>Your Habits</h3>
            </div>
            <div className="index-habit-container">
              {habits.map((habit, idx) => (
                <HabitIndexItem habit={habit} key={idx} />
              ))}
            </div>
          </div>
        );
    }
}

export default HabitIndex;