import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import HabitIndexItemContainer from './habit/habit_index_item_container';
import Modal from './modal/modal';
import HabitIndexContainer from './habit/habit_index';
import createHabitFormContainer from '.habit/create_habit_form_container';
//<NavBarContainer />
{/* <HabitIndexItemContainer /> */}
//

const App = () => (
  <div className="test">
    <HabitIndexItemContainer />
    <AuthRoute path='/' component={Main} />
    <ProtectedRoute path='/habit' componenet={CreateHabit}>
    <Modal />
  </div>
);

export default App;