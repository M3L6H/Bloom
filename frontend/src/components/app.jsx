import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main';
import Modal from './modal/modal'

const App = () => (
  <div className='test'>
    <Modal />
    <AuthRoute path="/" component={Main}/>
  </div>
);

export default App;