import { connect } from 'react-redux';
import TasksShow from './tasks_show';
import { fetchHabits } from '../../actions/habits_actions';
import { updateTask, deleteTask } from '../../actions/tasks_actions';

const mSTP = state => ({
    habits: state.entities.habits,
    tasks: Object.values(state.entities.tasks)
});

const mDTP = dispatch => ({
    fetchHabits: () => dispatch(fetchHabits()),
    updateTask: task => dispatch(updateTask(task)),
    deleteTask: id => dispatch(deleteTask(id))
});

export default connect(mSTP, mDTP)(TasksShow);