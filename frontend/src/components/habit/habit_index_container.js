import { connect } from "react-redux";
import HabitIndex from "./habit_index";
import {
  fetchHabits,
  deleteHabit,
  updateHabit,
} from "../../actions/habits_actions";
import { openModal } from '../../actions/modal_actions';
import { updateHabitList, fetchUser } from "../../actions/users_actions";


const mSTP = (state) => {
  return {
    habits: state.entities.habits,
    user: state.entities.users[state.session.user.id],

  };
};

const mDTP = (dispatch) => {
  return {
    fetchHabits: () => dispatch(fetchHabits()),
    deleteHabit: (id) => dispatch(deleteHabit(id)),
    updateHabit: (habit) => dispatch(updateHabit(habit)),
    updateHabitList: (habits) => dispatch(updateHabitList(habits)),
    fetchUser: () => dispatch(fetchUser()),
    openModal: (modal, obj) => dispatch(openModal(modal, obj)),

  };
};

export default connect(mSTP, mDTP)(HabitIndex);
