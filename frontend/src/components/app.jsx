import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main';
import Modal from './modal/modal';
import CreateHabit from './habit';
//import AsheNavBar from './ashe_nav_bar';
import NavBarContainer from './nav_bar/nav_bar_container';
import Landing from './landing';
import HabitShowContainer from './habit/habit_show_container';
import HabitIndexContainer from './habit/habit_index_container'

const App = () => (
  <div className="test">
    <Modal />
    <AuthRoute path="/" component={Main} />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <ProtectedRoute path="/habit" component={CreateHabit} />
    <ProtectedRoute path="/landing" component={HabitIndexContainer} />
    <ProtectedRoute path="/habit/:id" component={HabitShowContainer} />
  </div>
);

export default App;

// <ProtectedRoute path="/" component={NavBarContainer} />