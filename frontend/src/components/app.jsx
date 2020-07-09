import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main';
import Modal from './modal/modal';
import CreateHabit from './habit';
import AsheNavBar from './ashe_nav_bar';
// import NavBarContainer from './nav_bar/nav_bar_container';
import Landing from './landing';
// import HabitIndexItemContainer from './habit/habit_index_item_container';
import TasksShow from './tasks_show';

const App = () => (
  <div className="test">
    <Modal />
    <AuthRoute path="/" component={Main} />
    <ProtectedRoute path="/" component={AsheNavBar} />
    <ProtectedRoute path="/habit" component={CreateHabit} />
    <ProtectedRoute path="/landing" component={Landing} />
    <ProtectedRoute path="/tasks" component={TasksShow} />
    {/* <ProtectedRoute path="/habit/:id" component={HabitIndexItemContainer} /> */}
  </div>
);

export default App;