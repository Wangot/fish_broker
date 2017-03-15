var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory, hashHistory} = require('react-router');

var MainLayout = require('./components/MainLayout');
var DashBoard = require('./components/DashBoard');
var CreditorView = require('./components/creditors/view');
var CreditorList = require('./components/creditors/list');

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
jQuery(document).foundation();

// Custom styles
require('style-loader!css-loader!sass-loader!./styles/app.scss')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="privatespace" component={MainLayout}>
      <IndexRoute component={DashBoard} />
      <Route path="creditors" component={CreditorList}/>
      <Route path="creditors/:id" component={CreditorView}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
