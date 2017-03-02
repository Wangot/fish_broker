'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';

// Creditors
import CreditorListPage from './components/creditors/ListPage';
// import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/privatespace" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="creditors">
    	<IndexRoute component={CreditorListPage} />
    </Route>
  </Route>
);

export default routes;
