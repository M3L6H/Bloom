import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main';
import Modal from './modal/modal';
import CreateHabit from './habit';
import AsheNavBar from './ashe_nav_bar';

const App = () => (
  <div className='test'>
    <Modal />
    <AuthRoute path="/" component={Main}/>
    <ProtectedRoute path="/" component={AsheNavBar} />
    <ProtectedRoute path="/habit" component={CreateHabit}/>
    {/* <CreateHabit /> */}
  </div>
);

export default App;