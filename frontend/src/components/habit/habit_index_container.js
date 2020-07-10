import { connect } from "react-redux";
import HabitIndex from "./habit_index";
import {
  fetchHabits,
  deleteHabit,
  updateHabit,
} from "../../actions/habits_actions";


const mSTP = (state) => {
  return {
    habits: Object.values(state.entities.habits),
    user: state.entities.users[state.session.user.id]
  };
};

const mDTP = (dispatch) => {
  return {
    fetchHabits: () => dispatch(fetchHabits()),
    deleteHabit: (id) => dispatch(deleteHabit(id)),
    updateHabit: (habit) => dispatch(updateHabit(habit)),
    
  };
};

export default connect(mSTP, mDTP)(HabitIndex);
