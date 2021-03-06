import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import HabitShow from './habit_show';
import { fetchHabit, fetchHabits, updateHabit } from "../../actions/habits_actions";


const mapStateToProps = (state, ownProps) => {

    return ({
        habit: state.entities.habits[ownProps.match.params.id],
        tasks: Object.values(state.entities.tasks),
        redirect: true
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchHabit: (habitId) => dispatch(fetchHabit(habitId)),
        openModal: (modal, obj) => dispatch(openModal(modal, obj)),
        updateHabit: (habit) => dispatch(updateHabit(habit)),
        fetchHabits: () => dispatch(fetchHabits())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitShow);