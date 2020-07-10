import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main';
import Modal from './modal/modal';
import CreateHabit from './habit';
import HabitShowContainer from './habit/habit_show_container';
import {Switch} from 'react-router-dom';
import AsheNavBar from './ashe_nav_bar';
import Landing from './landing';

import TasksShow from './tasks_show';

import Fireworks from './fireworks';

const App = () => (
  // add switch
  <div className="test">
    <Fireworks />
    <Modal />
    <ProtectedRoute path="/" component={AsheNavBar} />
    <Switch>
      <ProtectedRoute path="/habits/:id" component={HabitShowContainer} />
      <ProtectedRoute path="/habit" component={CreateHabit} />
      <ProtectedRoute path="/landing" component={Landing} />
      <ProtectedRoute path="/tasks" component={TasksShow} />
      <AuthRoute path="/" component={Main} />
    </Switch>
  </div>
);

export default App;