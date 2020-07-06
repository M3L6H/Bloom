import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Header } from 'semantic-ui-react';
import { Switch } from 'react-router-dom';
import Modal from './modal/modal';
import Main from './main'; //will be Authroute /main

const App = () => (
  <div>
    <Modal />
    <AuthRoute exact path="/" component={Main} />
  </div>
);

export default App;