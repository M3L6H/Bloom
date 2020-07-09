import React from 'react';
import { connect } from 'react-redux';
import { fetchHabits } from "../../actions/habits_actions";
import { Link } from 'react-router-dom';
import TaskIndexItem from '../task/task_index_item';
import EditDescriptionForm from './edit_description_form';
import HabitIndexItem from './habit_index_item';

class HabitIndex extends React.Component {

    constructor(props) {
        super(props);        
    };

    componentDidMount() {
        this.props.fetchHabits();
    }

    render() {
        //debugger;
        const { habits } = this.props;
        if (!habits) return null;
        //debugger;
        return (
            <div>
                <div>
                    {habits.map(
                        (habit, idx) => <HabitIndexItem habit={habit} key={idx} />
                    )}
                </div>
            </div>
        )

    }
}

export default HabitIndex;
