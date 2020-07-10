import { connect } from 'react-redux';
import TasksShow from './tasks_show';
import { fetchHabits } from '../../actions/habits_actions';
import { updateTask, deleteTask } from '../../actions/tasks_actions';
import {fetchUser, updateDailyTaskList, sortDailyTaskList} from "../../actions/users_actions"
const mSTP = state => ({
    habits: state.entities.habits,
    tasks: state.entities.tasks,
    user: state.entities.users[state.session.user.id]
});

const mDTP = dispatch => ({
    fetchHabits: () => dispatch(fetchHabits()),
    updateTask: task => dispatch(updateTask(task)),
    deleteTask: id => dispatch(deleteTask(id)),
    fetchUser: ()=> dispatch(fetchUser()),
    updateDailyTaskList: (newTaskList) => dispatch(updateDailyTaskList(newTaskList)),
    sortDailyTaskList: ()=> dispatch(sortDailyTaskList()),
});

export default connect(mSTP, mDTP)(TasksShow);