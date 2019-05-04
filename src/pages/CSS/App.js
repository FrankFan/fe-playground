import React from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import Sidebar from './components/sidebar/';
import Routes from './router';
console.log(Routes);

const AppRouter = () => (
  <BrowserRouter>
    <section>
      <Sidebar />
      <main>{Routes}</main>
      <div>test</div>
    </section>
  </BrowserRouter>
);

export default AppRouter;
