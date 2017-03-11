var React = require('react');
var ErrorModal = require('./ErrorModal');

module.exports = function(states){
	if (states.errorMessage && typeof states.errorMessage === 'string') {
	    return (
	      <ErrorModal message={states.errorMessage}/>
	    )
	}
}