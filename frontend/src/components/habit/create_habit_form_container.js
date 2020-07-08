import { connect } from 'react-redux';
import CreateHabitForm from './create_habit_form';
import { createHabit } from '../../actions/habits_actions';
import { createTask } from '../../actions/tasks_actions';

const mDTP = dispatch => ({
    createHabit: habit => dispatch(createHabit(habit)),
    createTask: task => dispatch(createTask(task))
});

export default connect(null, mDTP)(CreateHabitForm);