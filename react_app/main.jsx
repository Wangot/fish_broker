var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory, hashHistory} = require('react-router');

var MainLayout = require('./components/MainLayout');
var DashBoard = require('./components/DashBoard');
var Creditors = require('./components/Creditors');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="privatespace" component={MainLayout}>
      <IndexRoute component={DashBoard} />
      <Route path="creditors" component={Creditors}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
