import Landing from './landing';
import { connect } from 'react-redux';
import { fetchHabits } from '../../actions/habits_actions';
import { updateTask, removeTask, deleteTask } from '../../actions/tasks_actions';

const mSTP = state => ({
    habits: state.entities.habits,
    tasks: Object.values(state.entities.tasks)
});

const mDTP = (dispatch) => ({
  fetchHabits: () => dispatch(fetchHabits()),
  updateTask: task => dispatch(updateTask(task)),
  removeTask: id => dispatch(removeTask(id)),
  deleteTask: id => dispatch(deleteTask(id))
});

export default connect(mSTP, mDTP)(Landing);