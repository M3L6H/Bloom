import React from 'react';
import { Header } from 'semantic-ui-react';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div className='test'>
    <NavBarContainer />
    <LoginFormContainer />
    <SignupFormContainer />
  </div>
);

export default App;