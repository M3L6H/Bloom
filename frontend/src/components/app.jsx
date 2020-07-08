import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main';
import Modal from './modal/modal';
import CreateHabit from './habit';
import AsheNavBar from './ashe_nav_bar';

import Jar from './jar';

const App = () => (
  <div className='test'>
    <Jar />
    {/* <Modal />
    <AuthRoute path="/" component={Main}/>
    <ProtectedRoute path="/" component={AsheNavBar} />
    <ProtectedRoute path="/habit" component={CreateHabit}/> */}
  </div>
);

export default App;