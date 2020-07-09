import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import HabitShow from './habit_show';
import { fetchHabits, deleteHabit, updateHabit } from "../../actions/habits_actions";

const mapStateToProps = (state) => {
    return null //({})
}

const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: () => dispatch(openModal()),
        deleteHabit: (id) => dispatch(deleteHabit()),
        updateHabit: (habit) => dispatch(updateHabit(habit)),
        fetchHabits: () => dispatch(fetchHabits())
    })
}

export default connect(null, mapDispatchToProps)(HabitShow);