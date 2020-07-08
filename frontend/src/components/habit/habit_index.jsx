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
        //debugger;
        this.props.fetchHabits();
    }

    render() {
        const { habits } = this.props;
        if (!habits) return null;
        debugger;
        return (
            <div>
                <div>
                    {habits.map(
                        (habit, idx) => <HabitIndexItem />
                    )}
                </div>
            </div>
        )

    }
}


const mSTP = (state) => {
    //debugger
    return ({
        habits: Object.values(state.entities.habits)
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchHabits: () => (dispatch(fetchHabits()))
    })
}

export default connect (mSTP, mDTP)(HabitIndex);