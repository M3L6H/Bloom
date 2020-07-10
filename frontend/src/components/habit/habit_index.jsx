import React from 'react';
import HabitIndexItem from './habit_index_item';

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
            <div className="show-habits-header">
              <h3>Your Habits</h3>
            </div>
            <div className="index-habit-container">
              {user.habits.map((habitId, idx) => (
                <HabitIndexItem habit={habits[habitId]} index={idx} key={habitId} />
              ))}
            </div>
          </div>
        );
    }
}

export default HabitIndex;