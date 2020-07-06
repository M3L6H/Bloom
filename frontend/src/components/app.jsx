import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Header } from 'semantic-ui-react';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';

const App = () => (
  <div className='test'>
    <LoginFormContainer />
    <SignupFormContainer />
  </div>
);

export default App;