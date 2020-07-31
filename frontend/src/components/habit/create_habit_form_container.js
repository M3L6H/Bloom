import { connect } from 'react-redux';
import CreateHabitForm from './create_habit_form';
import { createHabit } from '../../actions/habits_actions';
<<<<<<< HEAD
import { createTask } from '../../actions/tasks_actions';
import { openModal } from "../../actions/modal_actions";
=======
>>>>>>> d537f29524c73a38d7a8935f199fba1565c4c708

const mSTP = state => ({
  errors: state.errors.habits  
})

const mDTP = dispatch => ({
    createHabit: habit => dispatch(createHabit(habit)),
<<<<<<< HEAD
    openModal: (modal, object) => dispatch(openModal(modal,object)),
    // createTask: task => dispatch(createTask(task))
=======
>>>>>>> d537f29524c73a38d7a8935f199fba1565c4c708
});

export default connect(mSTP, mDTP)(CreateHabitForm);