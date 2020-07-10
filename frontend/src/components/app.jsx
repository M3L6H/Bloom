//Main App 

//Imports
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//Componenents
import Main from './main';
import Modal from './modal/modal';
import CreateHabit from './habit';
import HabitIndexContainer from './habit/habit_index_container';
import HabitShowContainer from './habit/habit_show_container';
import NavBar from './ashe_nav_bar';
import Landing from './landing';
import TasksShow from './tasks_show';
import {Switch} from 'react-router-dom';
import Dashboard from './dashboard';

import Fireworks from './fireworks';

const App = () => (
  // add switch
  <div className="test">
    <Fireworks />
    <Modal />
    <Switch>
      <ProtectedRoute path="/dashboard" component={()=><></>}/>
      <ProtectedRoute path="/" component={NavBar} />
    </Switch>

    <Switch>
      <ProtectedRoute path="/habits/:id" component={HabitShowContainer} />
      <ProtectedRoute path="/habits" component={HabitIndexContainer} />
      <ProtectedRoute path="/habit" component={CreateHabit} />
      <ProtectedRoute path="/landing" component={Landing} />
      <ProtectedRoute path="/tasks" component={TasksShow} />
      <ProtectedRoute path="/dashboard" component={Dashboard}/>
      <AuthRoute path="/" component={Main} />
    </Switch>
  </div>
);

export default App;