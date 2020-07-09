import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main';
import Modal from './modal/modal';
import CreateHabit from './habit';
//import AsheNavBar from './ashe_nav_bar';
import NavBarContainer from './nav_bar/nav_bar_container';
import Landing from './landing';
import HabitShowContainer from './habit/habit_show_container';
import HabitIndexContainer from './habit/habit_index_container';
import {Switch} from 'react-router-dom';

const App = () => (
  // add switch
  <div className="test">
    <Modal />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <Switch>
      <ProtectedRoute path="/habits/:id" component={HabitShowContainer} />
      <ProtectedRoute path="/habit" component={CreateHabit} />
      <ProtectedRoute path="/landing" component={HabitIndexContainer} />
      <AuthRoute path="/" component={Main} />
    </Switch>
  </div>
);

export default App;

// <ProtectedRoute path="/" component={NavBarContainer} />