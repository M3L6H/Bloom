//Main App 

//Imports
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//Componenents
import Main from './main';
import Modal from './modal/modal';
import CreateHabit from './habit';
import HabitShowContainer from './habit/habit_show_container';
import {Switch, Route} from 'react-router-dom';
import AsheNavBar from './ashe_nav_bar';
import Landing from './landing';
import TasksShow from './tasks_show';
import Dashboard from './dashboard';

const App = () => (
  // add switch
  <div className="test">
    <Modal />
    <Switch>
      <Route path="/dashboard" component={()=><></>}/>
      <ProtectedRoute path="/" component={AsheNavBar} />
    </Switch>

    <Switch>
      <ProtectedRoute path="/habits/:id" component={HabitShowContainer} />
      <ProtectedRoute path="/habit" component={CreateHabit} />
      <ProtectedRoute path="/landing" component={Landing} />
      <ProtectedRoute path="/tasks" component={TasksShow} />
      <ProtectedRoute path="/dashboard" component={Dashboard}/>
      <AuthRoute path="/" component={Main} />
    </Switch>
  </div>
);

export default App;