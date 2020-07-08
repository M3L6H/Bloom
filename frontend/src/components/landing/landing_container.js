import Landing from './landing';
import { connect } from 'react-redux';
import { fetchHabits } from '../../actions/habits_actions';

const mSTP = state => ({
    habits: state.entities.habits,
    tasks: Object.values(state.entities.tasks)
});

const mDTP = (dispatch) => ({
  fetchHabits: () => dispatch(fetchHabits())
});

export default connect(mSTP, mDTP)(Landing);