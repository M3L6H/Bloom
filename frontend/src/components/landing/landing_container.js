import Landing from './landing';
import { connect } from 'react-redux';
import { fetchHabits } from '../../actions/habits_actions';
import { updateTask } from '../../actions/tasks_actions';
import { fetchUser, updatePetals } from '../../actions/users_actions';

const mSTP = state => ({
    habits: state.entities.habits,
    tasks: state.entities.tasks,
    user: Object.values(state.entities.users)[0]
});

const mDTP = (dispatch) => ({
  fetchHabits: () => dispatch(fetchHabits()),
  updateTask: task => dispatch(updateTask(task)),
  fetchUser: () => dispatch(fetchUser()),
  updatePetals: petals => dispatch(updatePetals(petals))
});

export default connect(mSTP, mDTP)(Landing);