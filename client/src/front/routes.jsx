import * as React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import Layout from './layout/index';
import Home from './pages/home/index';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="index" />
      <Route path="index" component={Home} />
    </Route>
  </Router>
);