import { connect } from 'react-redux';
import CreateHabitForm from './create_habit_form';
import { createHabit } from '../../actions/habits_actions';
import { createTask } from '../../actions/tasks_actions';

const mSTP = state => ({
  errors: state.errors.habits  
})

const mDTP = dispatch => ({
    createHabit: habit => dispatch(createHabit(habit)),
    // createTask: task => dispatch(createTask(task))
});

export default connect(mSTP, mDTP)(CreateHabitForm);