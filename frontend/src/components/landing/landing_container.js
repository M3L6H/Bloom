import Landing from './landing';
import { connect } from 'react-redux';
import { fetchHabits } from '../../actions/habits_actions';

const mSTP = state => ({
    habits: state.habits,
    tasks: state.tasks
});

const mDTP = (dispatch) => ({
  fetchHabits: () => dispatch(fetchHabits())
});

export default connect(mSTP, mDTP)(Landing);