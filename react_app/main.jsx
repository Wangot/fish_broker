var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');

var MainLayout = require('./components/MainLayout');
var DashBoard = require('./components/DashBoard');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/privatespace" component={MainLayout}>
      <IndexRoute component={DashBoard} />
      <Route path="creditors" component={DashBoard}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
