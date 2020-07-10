import React from 'react';
import HabitIndexItem from './habit_index_item';

class HabitIndex extends React.Component {

    componentDidMount() {
        this.props.fetchHabits();
    }

    render() {
              
        const { habits, deleteHabit } = this.props;
        if (!habits) return null;
              
        return (
          <div className="habit-index-container">
            <div className="hic-title">My Habits</div>
            {habits.map((habit, idx) => (
              <HabitIndexItem
                habit={habit}
                key={idx}
                deleteHabit={deleteHabit}
              />
            ))}
          </div>
        );

    }
}

export default HabitIndex;
