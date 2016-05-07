// import client startup through a single index entry point
// defines all the routes
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from '/imports/containers/AppContainer.jsx';
import HelloWorld from '/imports/ui/components/HelloWorld.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path=":name" component={HelloWorld} />
    </Route>
  </Router>
);
