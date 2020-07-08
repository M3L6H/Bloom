import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import HabitIndexItemContainer from './habit/habit_index_item_container';
import Modal from './modal/modal';
import HabitIndexContainer from './habit/habit_index';
//<NavBarContainer />
//<HabitIndexItemContainer />

const App = () => (
  <div className="test">
    <NavBarContainer />
    <HabitIndexItemContainer />
    <Modal />
  </div>
);

export default App;