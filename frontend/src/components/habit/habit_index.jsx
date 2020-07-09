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
          <div className="habit-index-container">
            <div className="hic-title">My Habit Goals</div>
            {habits.map((habit, idx) => (
            <HabitIndexItem habit={habit} key={idx} />
            ))}
          </div>
        );

    }
}

export default HabitIndex;
