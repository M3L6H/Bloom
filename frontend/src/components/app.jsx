import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Header } from 'semantic-ui-react';
import { Switch } from 'react-router-dom';
import Main from './main/main';

const App = () => (
  <div>
    <Main />
  </div>
);

export default App;