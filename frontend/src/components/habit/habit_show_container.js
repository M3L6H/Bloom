import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import HabitShow from './habit_show';
import { fetchHabit, fetchHabits, deleteHabit, updateHabit } from "../../actions/habits_actions";


// const mSTP = (state) => ({
//   habits: state.entities.habits,
//   tasks: Object.values(state.entities.tasks),
// });
const mapStateToProps = (state, ownProps) => {
    //debugger
    return ({
        habit: state.entities.habits[ownProps.match.params.id],
        tasks: Object.values(state.entities.tasks)
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchHabit: (habitId) => dispatch(fetchHabit(habitId)),
        openModal: (modal) => dispatch(openModal(modal)),
        deleteHabit: (id) => dispatch(deleteHabit()),
        updateHabit: (habit) => dispatch(updateHabit(habit)),
        fetchHabits: () => dispatch(fetchHabits())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitShow);