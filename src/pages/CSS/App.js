import React from 'react';
import { HashRouter } from 'react-router-dom';

import Sidebar from './components/sidebar/';
import Routes from './router';
console.log(Routes);

const AppRouter = () => (
  <HashRouter>
    <section>
      <Sidebar />
      <main>{Routes}</main>
      <div>test</div>
    </section>
  </HashRouter>
);

export default AppRouter;
