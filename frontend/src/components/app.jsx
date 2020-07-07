import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import HabitIndexItemContainer from './habit/habit_index_item_container';
import Modal from './modal/modal';

const App = () => (
  <div className='test'>
    <Modal />
    <HabitIndexItemContainer />
  </div>
);

export default App;