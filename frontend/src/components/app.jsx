import React from 'react';
import { Header } from 'semantic-ui-react';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HabitIndexItemContainer from './habit/habit_index_item_container';

const App = () => (
  <div className='test'>
    <NavBarContainer />
  </div>
);

export default App;