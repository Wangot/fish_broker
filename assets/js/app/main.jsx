var React = require('react');
var ReactDOM = require('react-dom');

// var Greeter = require('./components/Greeter');
// import {Greeter} from 'Greeter';
var Greeter = require('Greeter');

var firstName = 'Eman';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
