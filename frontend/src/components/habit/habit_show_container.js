import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import HabitShow from './habit_show';
import { fetchHabit, fetchHabits, deleteHabit, updateHabit } from "../../actions/habits_actions";


const mapStateToProps = (state, ownProps) => {

    return ({
        habit: state.entities.habits[ownProps.match.params.id],
        tasks: Object.values(state.entities.tasks)
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchHabit: (habitId) => dispatch(fetchHabit(habitId)),
        openModal: (modal, obj) => dispatch(openModal(modal, obj)),
        deleteHabit: (id) => dispatch(deleteHabit(id)),
        updateHabit: (habit) => dispatch(updateHabit(habit)),
        fetchHabits: () => dispatch(fetchHabits())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitShow);