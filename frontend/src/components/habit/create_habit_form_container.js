import { connect } from 'react-redux';
import CreateHabitForm from './create_habit_form';
import { createHabit } from '../../actions/habits_actions';
import { createTask } from '../../actions/tasks_actions';
import { openModal } from "../../actions/modal_actions";

const mSTP = state => ({
  errors: state.errors.habits  
})

const mDTP = dispatch => ({
    createHabit: habit => dispatch(createHabit(habit)),
    openModal: (modal, object) => dispatch(openModal(modal,object)),
    // createTask: task => dispatch(createTask(task))
});

export default connect(mSTP, mDTP)(CreateHabitForm);