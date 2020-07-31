import { connect } from 'react-redux';
import TasksShow from './tasks_show';
import { fetchHabits } from '../../actions/habits_actions';
import { updateTask, deleteTask } from '../../actions/tasks_actions';
import { fetchUser, updatePetals, updateDailyTaskList, sortDailyTaskList} from "../../actions/users_actions";
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    habits: state.entities.habits,
    tasks: state.entities.tasks,
    user: state.entities.users[state.session.user.id]
});

const mDTP = dispatch => ({
    fetchHabits: () => dispatch(fetchHabits()),
    updateTask: task => dispatch(updateTask(task)),
    updatePetals: petals => dispatch(updatePetals(petals)),
    deleteTask: id => dispatch(deleteTask(id)),
    fetchUser: ()=> dispatch(fetchUser()),
    updateDailyTaskList: (newTaskList) => dispatch(updateDailyTaskList(newTaskList)),
    sortDailyTaskList: ()=> dispatch(sortDailyTaskList()),
    openModal: (type, object) => dispatch(openModal(type, object))
});

export default connect(mSTP, mDTP)(TasksShow);